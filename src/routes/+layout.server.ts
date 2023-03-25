// @ts-ignore
import type { LayoutServerLoad } from "$lib/types";
import prisma from "$lib/database";

export const load: LayoutServerLoad = async (event: any) => {
    const newProducts = await prisma.dessert.findMany({
        orderBy: {
            createdAt: "desc",
        },
        take: 1,
    });
    event.setHeaders({
        "Cache-Control": "max-age=0, s-max-age=60",
    })
    return { newProducts };
}