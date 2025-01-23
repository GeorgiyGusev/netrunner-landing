import { createThemeAction } from "remix-themes";
import { themeSessionResolver } from "@/app/themes/sessions.server";


export const action = createThemeAction(themeSessionResolver);