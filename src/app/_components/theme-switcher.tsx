"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Switch } from "@nextui-org/react";
import { Button } from "~/components/ui/button";
import { Moon, Sun } from "lucide-react";

type Props = {
  size?: "sm" | "md" | "lg";
  isSwitch?: boolean;
};

export function ThemeSwitcher({ size, isSwitch }: Props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {isSwitch ? (
        <Switch
          isSelected={theme == "dark"}
          size="lg"
          // thumbIcon={({ isSelected, className }) =>
          //   isSelected ? (
          //     <Icon
          //       icon="line-md:sun-rising-loop"
          //       className="text-primary"
          //       fontSize={24}
          //     />
          //   ) : (
          //     <Icon
          //       icon="line-md:moon-rising-loop"
          //       className="text-primary"
          //       fontSize={24}
          //     />
          //   )
          // }
          startContent={
            <Icon
              icon="line-md:sun-rising-loop"
              className="text-primary"
              fontSize={24}
            />
          }
          endContent={
            <Icon
              icon="line-md:moon-rising-loop"
              className="text-primary"
              fontSize={24}
            />
          }
          onValueChange={(e) => {
            if (e == true) {
              setTheme("dark");
            } else {
              setTheme("light");
            }
          }}
        />
      ) : theme == "light" ? (
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => setTheme("dark")}
        >
          <Moon />
        </Button>
      ) : (
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => setTheme("light")}
        >
          <Sun />
        </Button>
      )}
    </div>
  );
}
