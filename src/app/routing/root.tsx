import {
  isRouteErrorResponse,
  Links, type LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration, useLoaderData,
} from "react-router";

import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";
import { ThemeProvider } from 'remix-themes'
import Logo from "/logo-dark.svg"
import { themeSessionResolver } from "@/app/themes/sessions.server";
import { PreventFlashOnWrongTheme, useTheme } from "remix-themes";
import { HeroUIProvider } from "@heroui/react";


export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
];


// Return the theme from the session storage using the loader
export const loader: LoaderFunction = async ({ request }) => {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
};

export default function AppWithProviders() {
  const data = useLoaderData();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App/>
    </ThemeProvider>
  );
}

function App() {
  const data = useLoaderData();
  const [theme] = useTheme();
  return (
    <html lang="en" className={theme ?? ""}>
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <Meta/>
      <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)}/>
      <Links/>
      <link rel="icon" href={`/logo-${theme}.svg`}/>
    </head>
    <body>
    <HeroUIProvider>
      <Outlet/>
      <ScrollRestoration/>
      <Scripts/>
    </HeroUIProvider>
    </body>
    </html>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
