import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  tag: string
}

export default function ScrollButton(props: Props) {
  const [element, setElement] = useState<HTMLElement | undefined>();

  useEffect(() => {
    const elem = document.getElementById(props.tag);
    if (elem !== null) {
      setElement(elem);
    }
  }, []);

  const handleScroll = (offetTop: number, offsetHeight: number) => window.scrollTo({
    behavior: "smooth",
    top: offetTop + offsetHeight,
  });

  return (
    <div
      className="animate-bounce p-2 rounded-full border-black dark:border-white border-1 absolute bottom-5 cursor-pointer text-black dark:text-white"
      onClick={() => element ? handleScroll(element.offsetTop, element.offsetHeight) : undefined}>
      <ArrowDown/>
    </div>
  );
}