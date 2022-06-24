import { useEffect } from "react";

import People from "../../components/People";
import Input from "../../components/Input";
import { useSettingsStore } from "./store";

function Zustand() {
  const toggleDarkMode = useSettingsStore((state) => state.toggleDarkMode);
  const dark = useSettingsStore((state) => state.dark);

  useEffect(() => {
    if (dark) {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, [dark]);

  return (
    <div>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <p>People</p>
      <Input />
      <People />
    </div>
  );
}

export default Zustand;
