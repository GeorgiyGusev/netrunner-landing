import type { Route } from "./+types/home";
import { Welcome } from "@/pages/welcome";


export function meta({}: Route.MetaArgs) {
  return [
    { name: "description", content: "Netrunner group platform" },
  ];
}


export default function Home() {
  return <Welcome/>;
}
