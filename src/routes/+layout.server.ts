import type { LayoutServerLoad} from "./$types";

import prisma from "$lib/database";
import type {Actions} from "@sveltejs/kit";
import {redirect} from "@sveltejs/kit";

export const load: LayoutServerLoad = async ({event, locals, url}: any) => {
    let lastPosts = await prisma.post.findFirst({
        where: {
            published: true,
        },
        orderBy: {
            createdAt: "desc",
        },
        take: 1,
    });

    let lastDesserts = await prisma.dessert.findFirst({
        orderBy: {
            createdAt: "desc",
        },
        take: 1,
    });

    let blogPosts = await prisma.post.findMany({
        where: {
            published: true,
        },
        include: {
            author: {
                select: {
                    name: true
                }
            }
        },
        orderBy: {
            createdAt: "desc",
        }
    });

    return {
        lastPosts,
        lastDesserts,
        blogPosts,
    }
}