import React from "react";
import { Header } from "@/widgets/header";
import { Outlet } from "react-router";

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