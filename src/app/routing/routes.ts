import { type RouteConfig, layout, route } from "@react-router/dev/routes";


export default [
  layout("layouts/welcome-page-layout.tsx", [
    route("/", "routes/home.tsx")
  ]),
  route("action/set-theme", "action/set-theme.ts"),
] satisfies RouteConfig;
