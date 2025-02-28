// "use client";

// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   ReactNode,
// } from "react";

// type Theme = "dark" | "light" | "system";

// type ThemeProviderProps = {
//   children: ReactNode;
//   defaultTheme?: Theme;
//   storageKey?: string;
// };

// type ThemeProviderState = {
//   theme: Theme;
//   setTheme: (theme: Theme) => void;
// };

// const initialState: ThemeProviderState = {
//   theme: "system",
//   setTheme: () => null,
// };

// const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

// export function ThemeProvider({
//   children,
//   defaultTheme = "system",
//   storageKey = "theme",
//   ...props
// }: ThemeProviderProps) {
//   const [theme, setTheme] = useState<Theme>(defaultTheme);

//   // Initialize theme from localStorage when component mounts
//   useEffect(() => {
//     const savedTheme = localStorage.getItem(storageKey) as Theme | null;
//     if (savedTheme) {
//       setTheme(savedTheme);
//     }
//   }, [storageKey]);

//   // Apply theme to body element
//   useEffect(() => {
//     const body = document.body;

//     // Remove existing theme class
//     body.classList.remove("dark");

//     if (theme === "system") {
//       const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
//         .matches
//         ? "dark"
//         : "light";

//       if (systemTheme === "dark") {
//         body.classList.add("dark");
//       }
//     } else if (theme === "dark") {
//       body.classList.add("dark");
//     }
//   }, [theme]);

//   // Listen for system color scheme changes
//   useEffect(() => {
//     if (theme === "system") {
//       const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

//       const handleChange = (e: MediaQueryListEvent) => {
//         const body = document.body;
//         if (e.matches) {
//           body.classList.add("dark");
//         } else {
//           body.classList.remove("dark");
//         }
//       };

//       mediaQuery.addEventListener("change", handleChange);
//       return () => mediaQuery.removeEventListener("change", handleChange);
//     }
//   }, [theme]);

//   const value = {
//     theme,
//     setTheme: (newTheme: Theme) => {
//       localStorage.setItem(storageKey, newTheme);
//       setTheme(newTheme);
//     },
//   };

//   return (
//     <ThemeProviderContext.Provider {...props} value={value}>
//       {children}
//     </ThemeProviderContext.Provider>
//   );
// }

// export const useTheme = () => {
//   const context = useContext(ThemeProviderContext);

//   if (context === undefined)
//     throw new Error("useTheme must be used within a ThemeProvider");

//   return context;
// };

// export default ThemeProvider;
