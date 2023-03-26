import type { LayoutServerLoad} from "./$types";

import prisma from "$lib/database";
import type {Actions} from "@sveltejs/kit";
import {redirect} from "@sveltejs/kit";

export const load: LayoutServerLoad = async ({event, locals}: any) => {
    if (!locals.user) {
        throw redirect(302, "/");
    }

    const desserts = await prisma.dessert.findMany();
    const users = await prisma.user.findMany(
        {
            select: {
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
    const posts = await prisma.post.findMany();
    const subscribers = await prisma.subscribers.findMany();

    return { desserts, users };
}
