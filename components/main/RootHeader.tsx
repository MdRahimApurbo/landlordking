"use client";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Switch,
  User,
} from "@nextui-org/react";
import { MoonIcon, SunIcon, Volume2 } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { UserCard } from "../card/usercard";

const RootHeader = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="container">
      <div className="flex justify-between items-center py-10 px-40 sticky top-0 ">
        <div className="flex gap-5 items-center">
          <Button size="sm" isIconOnly startContent={<Volume2 />} />
          <Switch
            defaultSelected
            size="lg"
            color="secondary"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <SunIcon className={className} />
              ) : (
                <MoonIcon className={className} />
              )
            }
          ></Switch>
        </div>

        <div>
          <Popover showArrow placement="bottom">
            <PopoverTrigger>
              <User
                as="button"
                name="Zoe Lang"
                description="Product Designer"
                className="transition-transform"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
              />
            </PopoverTrigger>
            <PopoverContent className="p-1">
              <UserCard />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default RootHeader;
