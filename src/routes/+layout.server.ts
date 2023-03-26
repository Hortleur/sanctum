// @ts-ignore
import type { LayoutServerLoad } from "./$types";
import prisma from "$lib/database";

export const load: LayoutServerLoad = async ({event, locals}: any) => {
    const newProducts = await prisma.dessert.findMany({
        orderBy: {
            createdAt: "desc",
        },
        take: 1,
    });

    const user = locals.user;

    return { newProducts, user };
}