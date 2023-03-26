import { redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
    // if the user is logged in, redirect them to the home page
    throw redirect(302, '/')
}

export const actions: Actions = {
    default({ cookies }) {
        // eat the cookie
        cookies.set('session', '', {
            path: '/',
            expires: new Date(0),
        })

        // redirect the user
        throw redirect(302, '/')
    },
}
