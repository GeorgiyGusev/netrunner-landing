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
        className="dark:hidden  z-0"
        radius="none"
        height={40}
        width={40}
      />

      <Image
        src="/logo-dark.svg"
        alt="Netrunner HeaderLogo"
        className="hidden dark:block z-0"
        radius="none"
        height={40}
        width={40}
      />

    </>
  )
}