import { fail, redirect} from "@sveltejs/kit";
import type { Actions } from "./$types";
import prisma from "$lib/database";

export const actions: Actions = {
    createPost: async ({request, locals}) => {
        let data = await request.formData();
        const title = data.get("title");
        const content = data.get("content");
        let published = data.get("published");
        const authorId = data.get("authorId");
        const image = data.get("image");
        if (typeof title !== "string" ||
            typeof content !== "string" ||
            typeof authorId !== "string" ||
            typeof image !== "string" ||
            title.length === 0 ||
            content.length === 0 ||
            authorId.length === 0 ||
            image.length === 0) {
            return fail(400, {invalid: true})
        }

        if(!locals.user) return fail(401, {invalid: "Unauthorized"});

        await prisma.post.create({
            data: {
                title: title,
                content: content,
                authorId: parseInt(authorId),
                image: image,
                published: published === "on" ? true : false
            }
        })

        throw redirect(302, "/dashboard/posts");
    },

    publishPost: async ({request, locals}) => {
        let data = await request.formData();
        const id = data.get("id");
        if (typeof id !== "string" || id.length === 0) {
            return fail(400, {invalid: true})
        }

        if(!locals.user) return fail(401, {invalid: "Unauthorized"});

        await prisma.post.update({
            where: {
                id: parseInt(id)
            },
            data: {
                published: true
            }
        })

        throw redirect(302, "/dashboard/posts");
    },

    unPublishPost: async ({request, locals}) => {
        let data = await request.formData();
        const id = data.get("id");
        if (typeof id !== "string" || id.length === 0) {
            return fail(400, {invalid: true})
        }

        if(!locals.user) return fail(401, {invalid: "Unauthorized"});

        await prisma.post.update({
            where: {
                id: parseInt(id)
            },
            data: {
                published: false
            }
        })

        throw redirect(302, "/dashboard/posts");
    },

    deletePost: async ({request, locals}) => {
        let data = await request.formData();
        const id = data.get("id");
        if (typeof id !== "string" || id.length === 0) {
            return fail(400, {invalid: true})
        }

        if(!locals.user) return fail(401, {invalid: "Unauthorized"});

        await prisma.post.delete({
            where: {
                id: parseInt(id)
            }
        })

        throw redirect(302, "/dashboard/posts");
    }
}