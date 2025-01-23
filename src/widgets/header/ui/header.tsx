import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button, ButtonGroup } from "@heroui/button";
import { Link } from "@heroui/link";
import { BsDiscord, BsTelegram, BsYoutube } from "react-icons/bs";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "@/shared/ui";
import { Logo } from "@/widgets/logo";


export default function Header() {
  const [showNavBar, setShowNavBar] = useState(false);


  const handleScroll = () => (window.scrollY > window.innerHeight / 2)
    ? setShowNavBar(true)
    : setShowNavBar(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <Navbar height={70} maxWidth={"full"}
              className={`${showNavBar ? "opacity-100 " : "opacity-0"} fixed border-b-1 border-b-gray-500 transition-transform-opacity ease-out duration-500`}>
        <NavbarBrand>
          <Logo width={40} height={40}/>
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
              <Button as={Link} href="https://discord.gg/QNydm6nE" target="_blank" variant="flat">
                <BsDiscord/>
              </Button>
              <Button as={Link} href="https://t.me/zerosixed" target="_blank" variant="flat">
                <BsTelegram/>
              </Button>
              <Button as={Link} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" variant="flat">
                <BsYoutube/>
              </Button>
            </ButtonGroup>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  )
}
