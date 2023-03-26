import { fail, redirect} from "@sveltejs/kit";
import type { Actions } from "./$types";
import prisma from "$lib/database";

export const actions: Actions = {
    deleteSub: async ({request}: any) => {
        const data = await request.formData();
        const id = data.get("id");
        if (typeof id !== "string" || id.length === 0) {
            return fail(400, {invalid: true})
        }
        await prisma.subscribers.delete({
            where: {
                id: parseInt(id)
            }
        });
        throw redirect(302, "/dashboard/subscribers");
    }
}