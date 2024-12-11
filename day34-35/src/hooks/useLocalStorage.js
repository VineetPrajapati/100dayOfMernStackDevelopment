import { useState } from "react";

const useLocalStorage = (key, initalValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initalValue;
    } catch (error) {
      console.error("Error accessing localStorage: ", error);
      return initalValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting localStorage: ", error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
