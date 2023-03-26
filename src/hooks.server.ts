import type { Handle} from "@sveltejs/kit";
import  prisma  from "$lib/database";

export const handle: Handle = async ({event, resolve}) => {
    const session = event.cookies.get("session");

    if(!session) {
        return await resolve(event);
    }

    const user = await prisma.user.findUnique({
        where: {
            userAuthToken: session
        },
        select: {
            name: true,
            role: true
        }
    } as any);

    if (user) {
        event.locals.user = {
            name: user.name,
            // @ts-ignore
            role: user.role.name,
        }
    }

    return resolve(event);
}