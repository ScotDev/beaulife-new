import { useState, useEffect } from "react";

// function useSessionStorage(key, initialValue) {
//   const [value, setValue] = useState(() => {
//     const storedValue = sessionStorage.getItem(key);
//     return storedValue !== null ? JSON.parse(storedValue) : initialValue;
//   });

//   useEffect(() => {
//     sessionStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue];
// }

const useSessionStorage = (key, initialValue) => {
  const [sessionValue, setSessionValue] = useState(initialValue);

  useEffect(() => {
    if (!key) {
      throw new Error("useSessionStorage key may not be falsy");
    }

    try {
      const storedValue = sessionStorage.getItem(key);
      if (storedValue !== null) setSessionValue(JSON.parse(storedValue));
    } catch (error) {
      console.error(`useSessionStorage could not parse key ${key}`, error);
    }
  }, []);

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(sessionValue) : value;
      setSessionValue(valueToStore);
      sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`useSessionStorage could not set key ${key}`, error);
    }
  };

  return [sessionValue, setValue];
};
export default useSessionStorage;
