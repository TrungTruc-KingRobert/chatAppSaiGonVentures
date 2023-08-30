import { addDoc, collection, serverTimestamp, getDocs, where, query } from 'firebase/firestore';
import {db} from "./config"

// interface
import { userInterface } from '../interfaces/UserInterface';

// Kiểm tra xem user có trong db chưa
const checkUserExists = async (userId: string) => {
  const q = query(collection(db, "users"), where("uid", "==", userId));
  const querySnapshot = await getDocs(q);

  return !querySnapshot.empty;
};

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