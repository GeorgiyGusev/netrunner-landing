import React from "react";
import { Header } from "@/widgets/header";
import { type LoaderFunction, Outlet, useLoaderData } from "react-router";




export default function WelcomeLayout() {

  return (
    <>
      <header>
        <Header/>
      </header>
      <Outlet/>
    </>

  );
}