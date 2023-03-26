import { fail, redirect} from "@sveltejs/kit";
import type { Actions } from "./$types";
import prisma from "$lib/database";