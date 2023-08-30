import { addDoc, arrayUnion, collection, doc, serverTimestamp, updateDoc} from 'firebase/firestore';
import {db} from "./config"

// interface
import { roomInterface } from '../interfaces/RoomInterface';

// Thêm user mới
const addRoom = (room: roomInterface) => {
  try {
    const roomsCollection = collection(db, 'rooms');
    addDoc(roomsCollection, {...room, createdAt: serverTimestamp()});

    return {success: true, message: "Add new room successfully"}
  } catch (error) {
    return {success: false, message: "Can not add new room to friestore!"}
  }
}

// Cập nhật member cho room
const updateRoomMember = async (selectedRoom: roomInterface, data: string[]) => {
  try {
    if(selectedRoom.id){
      const roomsCollection = doc(db, "rooms", selectedRoom.id);

      await updateDoc(roomsCollection, {
        members: arrayUnion(...data),
      });

      return { success: true, message: "Update room successfully" };
    }   

    return { success: false, message: "Id room does not exits!" };
  } catch (error) {
    return { success: false, message: "Can not update this room!" };
  }
};

export {addRoom, updateRoomMember}