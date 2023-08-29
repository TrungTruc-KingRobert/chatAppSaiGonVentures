import { doc, getDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import {db} from "./config"

// interface
import { userInterface } from '../interfaces/UserInterface';

// Kiểm tra xem user có trong db chưa
const checkUserExists = async (userId: string) => {
  const documentRef = doc(db, "users", userId);
  const documentSnapshot = await getDoc(documentRef);
  
  return documentSnapshot.exists();
}

// Thêm user mới
const addUser = (user: userInterface) => {
  try {
    const usersCollection = collection(db, 'users');
    addDoc(usersCollection, {...user, createdAt: serverTimestamp()});

    return {success: true, message: "Add new user successfully"}
  } catch (error) {
    return {success: false, message: "Can not add new user to friestore!"}
  }
  
}

export {checkUserExists, addUser}