// hooks
import { useEffect, useContext } from "react";

// firebase
import { auth, db } from "../../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

// context
import { AuthContext } from "../../contexts/AuthProvider";

const UserInfo = () => {
  const userInfo = useContext(AuthContext);

  return (
    <div className="w-full grid grid-cols-[2fr_1fr]">
      <div className="flex flex-row items-center">
        {userInfo.photoURL ? (
          <img
            src={userInfo.photoURL}
            alt="This is user avatar"
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <div className="avatar placeholder">
            <div className="w-8 bg-slate-400 text-white rounded-[50%]">
              <span>{userInfo.displayName.charAt(0).toUpperCase()}</span>
            </div>
          </div>
        )}
        <p className="ml-1 truncate">{userInfo.displayName}</p>
      </div>
      <button
        className="border border-white rounded-md mr-2 px-1 truncate hover:bg-white hover:text-black"
        onClick={() => auth.signOut()}
      >
        Đăng xuất
      </button>
    </div>
  );
};

export default UserInfo;
