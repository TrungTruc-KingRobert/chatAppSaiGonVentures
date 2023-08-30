import { addDoc, collection, serverTimestamp} from 'firebase/firestore';
import {db} from "./config"

// interface
import { roomInterface } from '../interfaces/RoomInterface';

// Thêm user mới
const addRoom = (room: roomInterface) => {
  try {
    const usersCollection = collection(db, 'rooms');
    addDoc(usersCollection, {...room, createdAt: serverTimestamp()});

    return {success: true, message: "Add new room successfully"}
  } catch (error) {
    return {success: false, message: "Can not add new room to friestore!"}
  }
  
}

export {addRoom}