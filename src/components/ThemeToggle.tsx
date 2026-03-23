import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-[52px] h-[28px]" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        relative w-[52px] h-[28px] rounded-full transition-colors duration-300 ease-in-out
        flex items-center px-[3px]
        ${isDark
          ? "bg-secondary shadow-inner"
          : "bg-muted shadow-inner"
        }
      `}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Icons on the track */}
      <Sun className={`absolute left-[7px] h-3.5 w-3.5 transition-opacity duration-300 ${isDark ? "opacity-30 text-muted-foreground" : "opacity-0"}`} />
      <Moon className={`absolute right-[7px] h-3.5 w-3.5 transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-30 text-muted-foreground"}`} />

      {/* Sliding knob */}
      <span
        className={`
          relative z-10 w-[22px] h-[22px] rounded-full shadow-md
          flex items-center justify-center
          transition-all duration-300 ease-in-out
          ${isDark
            ? "translate-x-[24px] bg-foreground"
            : "translate-x-0 bg-background"
          }
        `}
      >
        {isDark ? (
          <Moon className="h-3 w-3 text-background" />
        ) : (
          <Sun className="h-3 w-3 text-foreground" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
