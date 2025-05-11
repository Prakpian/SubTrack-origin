import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getCollection = async (currentUser) => {
  try {
    const querySnapshot = await getDocs(collection(db, currentUser.email));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    console.error(err);
  }
};

export const addToCollection = async (currentUser, formData) => {
  try {
    await addDoc(collection(db, currentUser.email), formData);
  } catch (err) {
    console.log(err);
  }
};

export const editDocument = async (currentUser, formData, id) => {
  try {
    await updateDoc(doc(db, currentUser.email, id), formData);
  } catch (err) {
    console.log(err);
  }
};

export const deleteDocument = async (currentUser, id) => {
  try {
    await deleteDoc(doc(db, currentUser.email, id));
  } catch (err) {
    console.log(err);
  }
};
