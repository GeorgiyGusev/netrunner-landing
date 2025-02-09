import { Image } from "@heroui/image";


type Props = {
  width?: number | undefined;
  height?: number | undefined;
}


export default function HeaderLogo(props: Props) {

  return (
    <>

      <Image
        src="/logo-light.svg"
        alt="Netrunner HeaderLogo"
        className="dark:hidden w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 z-0"
        radius="none"
      />

      <Image
        src="/logo-dark.svg"
        alt="Netrunner HeaderLogo"
        className="hidden dark:block w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 z-0"
        radius="none"
      />

    </>
  )
}