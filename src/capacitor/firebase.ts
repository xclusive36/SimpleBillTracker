import { FirebaseAuthentication } from "@capacitor-firebase/authentication";
import {
  AddDocumentOptions,
  DeleteDocumentOptions,
  FirebaseFirestore,
  GetCollectionOptions,
  GetDocumentOptions,
  SetDocumentOptions,
  UpdateDocumentOptions,
} from "@capacitor-firebase/firestore";

// Authentication

export const applyActionCode = async () => {
  return await FirebaseAuthentication.applyActionCode({ oobCode: "1234" });
};

export const deleteUser = async () => {
  return await FirebaseAuthentication.deleteUser();
};

export const getCurrentUser = async () => {
  const result = await FirebaseAuthentication.getCurrentUser();
  return result.user;
};

export const getIdToken = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return;
  }
  const result = await FirebaseAuthentication.getIdToken();
  return result.token;
};

export const setLanguageCode = async () => {
  return await FirebaseAuthentication.setLanguageCode({
    languageCode: "en-US",
  });
};

export const signInWithApple = async () => {
  const result = await FirebaseAuthentication.signInWithApple();
  return result.user;
};

export const signOut = async () => {
  return await FirebaseAuthentication.signOut();
};

export const useAppLanguage = async () => {
  return await FirebaseAuthentication.useAppLanguage();
};

export const listenForAuthStateChanged = async () => {
  return await FirebaseAuthentication.addListener("authStateChange", (user) => {
    console.log("User state changed", user);
  });
};

export const removeAuthStateChangedListener = async () => {
  return await FirebaseAuthentication.removeAllListeners();
};

// Firestore

export const addDocument = async (obj: AddDocumentOptions) => {
  return await FirebaseFirestore.addDocument(obj);
  // {
  //   reference: "user/userID",
  //   data: {
  //     name: "Alice",
  //     age: 30,
  //   },
  // }
};

export const deleteDocument = async (obj: DeleteDocumentOptions) => {
  return await FirebaseFirestore.deleteDocument(obj);
  // {
  //   reference: "user/userID",
  // }
};

export const getDocument = async (obj: GetDocumentOptions) => {
  const { snapshot } = await FirebaseFirestore.getDocument(obj);
  return snapshot;
  // {
  //   reference: "user/userID",
  // }
};

export const setDocument = async (obj: SetDocumentOptions) => {
  await FirebaseFirestore.setDocument(obj);
  // {
  //   reference: "user/userID",
  //   data: {
  //     name: "Alice",
  //     age: 30,
  //   },
  // }
};

export const updateDocument = async (obj: UpdateDocumentOptions) => {
  await FirebaseFirestore.updateDocument(obj);
  // {
  //   reference: "user/userID",
  //   data: {
  //     age: 31,
  //   },
  // }
};

export const getCollection = async (obj: GetCollectionOptions) => {
  const { snapshots } = await FirebaseFirestore.getCollection(obj);
  return snapshots;
  // {
  //   reference: "user/userID",
  // }
};
