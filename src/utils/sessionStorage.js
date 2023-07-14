const getSessionStorageValue = (key) => {
  const storedValue = sessionStorage.getItem(key);
  return storedValue !== null ? JSON.parse(storedValue) : "No value found";
};

const setSessionStorageValue = (key, value) => {
  try {
    if (!key) throw new Error("Key not found");
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export { getSessionStorageValue, setSessionStorageValue };
