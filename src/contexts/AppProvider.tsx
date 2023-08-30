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
  members: userInterface[];
  isAddRoomVisible: boolean;
  setIsAddRoomVisible: (value: boolean) => void;
  selectedRoom: roomInterface;
  setSelectedRoom: (value: roomInterface) => void;
}

export const AppContext = createContext<RoomContextType>({
  rooms: [],
  members: [],
  isAddRoomVisible: false,
  setIsAddRoomVisible: (value: boolean) => {},
  selectedRoom: {
    id: "",
    name: "",
    description: "",
    members: [""]
  },
  setSelectedRoom: (value: roomInterface) => {}
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const user = useContext(AuthContext);

  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<roomInterface>({
    id: "",
    name: "",
    description: "",
    members: [""]
  });

  const roomsCondition: conditionInterface = useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: user.uid
    };
  }, [user.uid]);

  const rooms = useFirestore("rooms", roomsCondition);

  const usersCondition = useMemo(() => {
    return {
      fieldName: "uid",
      operator: "in" as const,
      compareValue: selectedRoom.members
    };
  }, [selectedRoom.members]);

  const members = useFirestore("users", usersCondition);

  return (
    <AppContext.Provider
      value={{
        rooms,
        members,
        isAddRoomVisible,
        setIsAddRoomVisible,
        selectedRoom,
        setSelectedRoom
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
