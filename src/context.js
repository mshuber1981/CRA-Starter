import { useState, createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = function ({ children }) {
  const [theme, setTheme] = useState("light");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const setLight = () => setTheme("light");

  const setDark = () => setTheme("dark");

  const toggleTheme = () =>
    setTheme((prevState) =>
      prevState === "light" ? setTheme("dark") : setTheme("light")
    );

  const openSidebar = () => setIsSidebarOpen((prevState) => !prevState);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <AppContext.Provider
      value={{
        theme,
        isSidebarOpen,
        setLight,
        setDark,
        toggleTheme,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
