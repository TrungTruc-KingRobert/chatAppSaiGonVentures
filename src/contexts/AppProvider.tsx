// hooks
import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import useFirestore from "../hooks/useFirestore";

// interface
import { conditionInterface } from "../interfaces/ConditionInterface";
import { roomInterface } from "../interfaces/RoomInterface";
import { userInterface } from "../interfaces/UserInterface";

// context
import { AuthContext } from "./AuthProvider";

interface RoomContextType {
  rooms: roomInterface[];
  users: userInterface[];
  members: userInterface[];
  selectedRoom: roomInterface;
  isAddRoomVisible: boolean;
  setIsAddRoomVisible: (value: boolean) => void;
  isInviteMemberVisible: boolean;
  setIsInviteMemberVisible: (value: boolean) => void;
  selectedRoomId: string;
  setSelectedRoomId: (value: string) => void;
}

export const AppContext = createContext<RoomContextType>({
  rooms: [],
  users: [],
  members: [],
  selectedRoom: {
    id: "",
    name: "",
    description: "",
    members: []
  },
  isAddRoomVisible: false,
  setIsAddRoomVisible: (value: boolean) => {},
  isInviteMemberVisible: false,
  setIsInviteMemberVisible: (value: boolean) => {},
  selectedRoomId: "",
  setSelectedRoomId: (value: string) => {}
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const user = useContext(AuthContext);

  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
  const [isInviteMemberVisible, setIsInviteMemberVisible] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState("");

  const roomsCondition: conditionInterface = useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: user.uid
    };
  }, [user.uid]);

  const rooms = useFirestore("rooms", roomsCondition);

  const selectedRoom = useMemo(
    () => rooms.find((room: roomInterface) => room.id === selectedRoomId) || {},
    [rooms, selectedRoomId]
  );

  const usersCondition = useMemo(() => {
    return {
      fieldName: "uid",
      operator: "in" as const,
      compareValue: selectedRoom.members
    };
  }, [selectedRoom.members]);

  const members = useFirestore("users", usersCondition);

  const users = useFirestore("users").filter(
    (u: userInterface) => u.uid !== user.uid
  );

  return (
    <AppContext.Provider
      value={{
        rooms,
        users,
        members,
        selectedRoom,
        isAddRoomVisible,
        setIsAddRoomVisible,
        isInviteMemberVisible,
        setIsInviteMemberVisible,
        selectedRoomId,
        setSelectedRoomId
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
