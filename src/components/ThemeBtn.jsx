import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function ThemeBtn() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isTheme, setIsTheme] = useState(false);
  const handleChangeTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    setIsTheme(true);
  }, []);
  if (!isTheme) {
    return;
  }
  return (
    <button onClick={handleChangeTheme} className="flex">
      {resolvedTheme === "light" ? (
        <i className="bx bx-moon"></i>
      ) : (
        <i className="bx bx-sun"></i>
      )}
    </button>
  );
}
