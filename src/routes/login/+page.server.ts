import { fail,redirect} from "@sveltejs/kit";
// @ts-ignore
import type { PageServerLoad, Action, Actions } from "./$types";
// @ts-ignore
import prisma from "$lib/database";
// @ts-ignore
import bcrypt from "bcrypt";
import * as crypto from "crypto";

export const load: PageServerLoad = async ({locals}: any) => {
    if (locals.user) {
        throw redirect(302, "/");
    }
}

export const actions: Actions = {
    login: async ({cookies, request}: any) => {
        const data = await request.formData();
        const email = data.get("email");
        const password = data.get("password");

        if (
            typeof email !== "string" ||
            typeof password !== "string" ||
            email.length === 0 ||
            password.length === 0
        ) {
            return fail(400, {invalid: true})
        }

        const user = await prisma.user.findUnique({
            where: {
                email: email,
            }
        });

        if (!user) {
            return fail(401, {credentials: true});
        }

        const passwordMatch = await bcrypt.compare(password, user.passwordHash);

        if (!passwordMatch) {
            return fail(401, {credentials: true});
        }

        const authenticationToken = await prisma.user.update({
            where: {
                email: user.email,
            },
            data: {
                userAuthToken: crypto.randomUUID()
            }
        });

        cookies.set("session", authenticationToken.userAuthToken, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7,
        });

        throw redirect(302, "/dashboard");
    }
}
