import { fail, redirect} from "@sveltejs/kit";
import type { Actions } from "./$types";
import prisma from "$lib/database";
import bcrypt from "bcrypt";
import * as crypto from "crypto";

export const actions: Actions = {
    deleteUser: async ({request}: any) => {
        const data = await request.formData();
        const id = data.get("id");
        if (typeof id !== "string" || id.length === 0) {
            return fail(400, {invalid: true})
        }
        await prisma.user.delete({
            where: {
                id: parseInt(id)
            }
        });
        throw redirect(302, "/dashboard/users");
    },

    addUser: async ({request}: any) => {
        const data = await request.formData();
        const name = data.get("name");
        const email = data.get("email");
        const password = data.get("password");
        const role = data.get("role");
        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof password !== "string" ||
            typeof role !== "string" ||
            name.length === 0 ||
            email.length === 0 ||
            password.length === 0 ||
            role.length === 0
        ) {
            return fail(400, {invalid: "Invalid data"})
        }

        const user = await prisma.user.findUnique({
            where: {
                email: email,
            }
        });
        if (user) {
            return fail(401, {invalid: "User already exists"});
        }
        await prisma.user.create({
            data: {
                name: name,
                email: email,
                passwordHash: await bcrypt.hash(password, 12),
                role: {connect: {id: parseInt(role)}},
                userAuthToken: crypto.randomUUID()
            }
        });
        throw redirect(302, "/dashboard/users");
    }

}