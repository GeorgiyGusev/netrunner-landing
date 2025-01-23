import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button, ButtonGroup } from "@heroui/button";
import { Link } from "@heroui/link";
import { BsDiscord, BsTelegram, BsYoutube } from "react-icons/bs";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "@/shared/ui";
import { HeaderLogo } from "@/widgets/header-logo";

export default function Header() {
  const [showNavBar, setShowNavBar] = useState(false);

  const handleScroll = () => setShowNavBar(window.scrollY > window.innerHeight / 2);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <Navbar height={70} maxWidth={"full"}
            className={`${showNavBar ? "opacity-100 " : "opacity-0"} fixed border-b-1 border-b-gray-500 transition-transform-opacity ease-out duration-500`}>
      <NavbarBrand>
        <HeaderLogo/>
        <p
          className="bg-gradient-to-r from-black via-red-700 to-red-500 dark:from-white dark:via-white dark:to-red-600 text-transparent bg-clip-text text-3xl font-bold ml-2">
          NETRUNNER
        </p>
      </NavbarBrand>

      <NavbarContent justify={"end"} className={"w-full"}>
        <NavbarItem>
          <ThemeSwitcher/>
        </NavbarItem>

        <NavbarItem>
          <ButtonGroup>
            <Button as={Link} href="https://discord.gg/B5nNrv35Yc" target="_blank" variant="flat">
              <BsDiscord/>
            </Button>
            <Button as={Link} href="https://t.me/netrunnerz" target="_blank" variant="flat">
              <BsTelegram/>
            </Button>
            <Button as={Link} href="https://www.youtube.com/@netrunner_group" target="_blank" variant="flat">
              <BsYoutube/>
            </Button>
          </ButtonGroup>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
