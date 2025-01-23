import { useEffect, useState } from "react";
import { Theme, useTheme } from "remix-themes";
import { MoonIcon, SunIcon } from "@heroui/shared-icons";
import { Switch } from "@heroui/react";


function ThemeSwitcher() {
  const [theme, setTheme] = useTheme();
  const [themeSwitcher, setThemeSwitcher] = useState(false);

  useEffect(() => setThemeSwitcher(theme == "light"), [theme]);

  return (
    <Switch
      defaultSelected
      size="lg"
      isSelected={themeSwitcher}
      onValueChange={(isSelected) => setTheme(isSelected ? Theme.LIGHT : Theme.DARK)}
      thumbIcon={({isSelected, className}) =>
        isSelected ? <SunIcon className={className}/> : <MoonIcon className={className}/>
      }
    />
  );
}

export default ThemeSwitcher;