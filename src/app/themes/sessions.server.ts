// sessions.server.tsx

import { createThemeSessionResolver } from "remix-themes";
import { createCookieSessionStorage } from "react-router";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__netrunner-theme",
    // domain: 'remix.run',
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: ["s3cr3t"],
    // secure: true,
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);