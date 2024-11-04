"use client";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Slider,
  SliderValue,
  Switch,
  User,
} from "@nextui-org/react";
import { MoonIcon, SunIcon, Volume, Volume2 } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { UserCard } from "../card/usercard";

const RootHeader = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [value, setValue] = useState<SliderValue>(25);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="container">
      <div className="flex justify-between items-center py-10 px-40 sticky top-0 ">
        <div className="flex gap-5 items-center">
          <Popover placement="bottom-start" showArrow={true}>
            <PopoverTrigger>
              <Button size="sm" isIconOnly startContent={<Volume2 />} />
            </PopoverTrigger>
            <PopoverContent className="w-[500px] bg-primary-700">
              <div className="flex flex-row gap-2 w-full h-full max-w-md items-center justify-center">
                <Slider
                  aria-label="Volume"
                  size="md"
                  color="primary"
                  value={value}
                  onChange={setValue}
                  startContent={
                    <Button
                      isIconOnly
                      variant="light"
                      radius="full"
                      onPress={() =>
                        setValue((prev) =>
                          Number(prev) >= 10 ? Number(prev) - 10 : 0
                        )
                      }
                    >
                      <Volume className="text-2xl" />
                    </Button>
                  }
                  endContent={
                    <Button
                      isIconOnly
                      variant="light"
                      radius="full"
                      onPress={() =>
                        setValue((prev) =>
                          Number(prev) <= 90 ? Number(prev) + 10 : 100
                        )
                      }
                    >
                      <Volume2 className="text-2xl" />
                    </Button>
                  }
                  className="max-w-md"
                />
                <p className="text-default-500 font-medium text-small w-6">
                  {value}
                </p>
              </div>
            </PopoverContent>
          </Popover>
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
