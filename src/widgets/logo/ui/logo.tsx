import { Image } from "@heroui/image";
import { useTheme } from "remix-themes";


type Props = {
  width?: number | undefined;
  height?: number | undefined;
}

export default function Logo(props: Props) {
  const [theme] = useTheme();

  return (
    <Image
      src={theme == "dark" ? "logo-dark.svg" : "logo-light.svg"}
      alt="Netrunner Logo"
      className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56"
      radius="none"
      width={props.width}
      height={props.height}
    />
  )
}