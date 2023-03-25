import prisma from "$lib/database";
// @ts-ignore
import type { LayoutServerLoad } from "$lib/types";
// @ts-ignore
export const load: LayoutServerLoad = async (event) => {
    const products = await prisma.dessert.findMany({
        orderBy: {
            createdAt: "desc",
        }
    });
    return { products };
};