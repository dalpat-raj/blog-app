"use client";

import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="h-7 w-7 p-[2px] rounded-full flex justify-center items-center"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <MdOutlineLightMode className="absolute text-2xl rotate-0 scale-100 dark:rotate-90 dark:scale-0 dark:hover:text-[--black]" />
      <MdOutlineDarkMode className="absolute text-2xl rotate-90 scale-0 dark:rotate-0 dark:scale-100 dark:hover:text-[--white]" />
    </button>
  );
}