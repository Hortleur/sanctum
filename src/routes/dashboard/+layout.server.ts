import type { LayoutServerLoad} from "./$types";

import prisma from "$lib/database";
import type {Actions} from "@sveltejs/kit";
import {redirect} from "@sveltejs/kit";

export const load: LayoutServerLoad = async ({event, locals, url}: any) => {
    const {pathname} = url;
    if (!locals.user || locals.user.role !== "ADMIN") {
        throw redirect(302, "/");
    }

    const desserts = await prisma.dessert.findMany({
        orderBy: {
            createdAt: "desc",
        }
    });
    const users = await prisma.user.findMany(
        {
            select: {
                id: true,
                name: true,
                email: true,
                role: {
                    select: {
                        name: true
                    }
                }
            }
        }
    );
    const posts = await prisma.post.findMany({
        include: {
            author: {
                select: {
                    name: true
                }
            }
        },
        orderBy: {
            createdAt: "desc",
        },
        take: 1,
    });
    const subscribers = await prisma.subscribers.findMany();
    const roles = await prisma.roles.findMany();

    return { desserts, users, roles, posts, subscribers , pathname};
}
