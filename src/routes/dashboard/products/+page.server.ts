import { fail, redirect} from "@sveltejs/kit";
import type { Actions } from "./$types";
import prisma from "$lib/database";

export const actions: Actions = {
    createProduct: async ({request, locals}: any) => {
        let data = await request.formData();
        const title = data.get("name");
        const description = data.get("description");
        const image = data.get("picture");
        if (typeof title !== "string" ||
            typeof description !== "string" ||
            typeof image !== "string" ||
            title.length === 0 ||
            description.length === 0 ||
            image.length === 0) {
            return fail(400, {invalid: true})
        }

        if(!locals.user) return fail(401, {invalid: "Unauthorized"});

        await prisma.dessert.create({
            data: {
                name: title,
                description: description,
                picture: image,
            }
        })

        throw redirect(302, "/dashboard/products");
    },
    deleteProduct: async ({request, locals}: any) => {
        let data = await request.formData();
        const id = data.get("id");
        if (typeof id !== "string" || id.length === 0) {
            return fail(400, {invalid: true})
        }

        if(!locals.user) return fail(401, {invalid: "Unauthorized"});

        await prisma.dessert.delete({
            where: {
                id: parseInt(id)
            }
        })

        throw redirect(302, "/dashboard/products");
    }
}