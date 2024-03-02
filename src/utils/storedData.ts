import { Storage } from "@ionic/storage";

export const store = new Storage(); // Create a new instance of the Storage class
store.create(); // Create the storage of the device if it doesn't exist

export const getStoredData = async () => {
  // This function gets the bills object from the storage of the device and returns it
  const data = await store.get("mybills"); // Get the bills object from the storage of the device

  if (data) return data; // Return the data
  return []; // If the data doesn't exist, return an empty array
};
