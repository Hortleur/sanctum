import { fail, redirect} from "@sveltejs/kit";
import type {Actions, PageServerLoad} from "./$types";
import prisma from "$lib/database";

export const actions: Actions = {
    subscribe: async ({request}: any) => {
        const data = await request.formData();
        const email = data.get("email");
        if (typeof email !== "string" || email.length === 0) {
            return fail(400, {invalid: true})
        }
        await prisma.subscribers.create({
            data: {
                email: email,
            }
        });
        throw redirect(302, "/");
    }
}