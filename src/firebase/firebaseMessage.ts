import { addDoc, collection, serverTimestamp} from 'firebase/firestore';
import {db} from "./config"

// interface
import { messageInterface } from '../interfaces/MessageInterface';

// Thêm user mới
const addMessage = (message: messageInterface) => {
  try {
    const roomsCollection = collection(db, 'messages');
    addDoc(roomsCollection, {...message, createdAt: serverTimestamp()});

    return {success: true, message: "Send new message successfully"}
  } catch (error) {
    return {success: false, message: "Can not send new message!"}
  }
}

export {addMessage}