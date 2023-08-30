// hooks
import { useContext } from "react";

// react-tooltip
import { Tooltip } from "react-tooltip";

// icons
import { FaUserPlus } from "react-icons/fa";

// interface
import { userInterface } from "../../interfaces/UserInterface";

// context
import { AppContext } from "../../contexts/AppProvider";

const HeaderChatWindow = () => {
  const { selectedRoom, members, setIsInviteMemberVisible } =
    useContext(AppContext);

  const handleInviteMember = () => {
    setIsInviteMemberVisible(true);
  };

  return (
    <div className="w-full h-[60px] p-2 border-b-2 border-sky-400">
      <div className="flex justify-between items-cente px-4">
        <div>
          <p>{selectedRoom ? selectedRoom.name : "Tên phòng"}</p>
          <span className="text-xs">
            {selectedRoom ? selectedRoom.description : "Mô tả phòng"}
          </span>
        </div>
        <div className="flex h-10">
          <button
            className="flex items-center mr-2 hover:font-bold"
            onClick={handleInviteMember}
          >
            <FaUserPlus className="mr-1" /> Mời
          </button>
          <div className="avatar-group -space-x-4">
            {members ? (
              members.length <= 2 ? (
                members.map((member: userInterface, index: number) => (
                  <div key={member.uid}>
                    <div
                      id={member.uid}
                      className={`avatar cursor-pointer ${
                        member.photoURL ? "" : "placeholder"
                      }`}
                    >
                      <div
                        className={`w-8 ${
                          member.photoURL
                            ? ""
                            : "bg-neutral-focus text-neutral-content"
                        }`}
                      >
                        {member.photoURL ? (
                          <img src={member.photoURL} />
                        ) : (
                          <span>
                            {member.displayName.charAt(0).toUpperCase()}
                          </span>
                        )}
                      </div>
                    </div>
                    <Tooltip anchorSelect={`#${member.uid}`}>
                      <button>{member.displayName}</button>
                    </Tooltip>
                  </div>
                ))
              ) : (
                <>
                  <div
                    id={members[0].uid}
                    className={`avatar cursor-pointer ${
                      members[0].photoURL ? "" : "placeholder"
                    }`}
                  >
                    <div
                      className={`w-8 ${
                        members[0].photoURL
                          ? ""
                          : "bg-neutral-focus text-neutral-content"
                      }`}
                    >
                      {members[0].photoURL ? (
                        <img src={members[0].photoURL} />
                      ) : (
                        <span>
                          {members[0].displayName.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                  </div>
                  <Tooltip anchorSelect={`#${members[0].uid}`}>
                    <button>{members[0].displayName}</button>
                  </Tooltip>
                  <div
                    id={members[1].uid}
                    className={`avatar cursor-pointer ${
                      members[1].photoURL ? "" : "placeholder"
                    }`}
                  >
                    <div
                      className={`w-8 ${
                        members[1].photoURL
                          ? ""
                          : "bg-neutral-focus text-neutral-content"
                      }`}
                    >
                      {members[1].photoURL ? (
                        <img src={members[1].photoURL} />
                      ) : (
                        <span>
                          {members[1].displayName.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                  </div>
                  <Tooltip anchorSelect={`#${members[1].uid}`}>
                    <button>{members[1].displayName}</button>
                  </Tooltip>
                  <div
                    id="id_user_hidden"
                    className="avatar placeholder cursor-pointer"
                  >
                    <div className="w-8 bg-neutral-focus text-neutral-content">
                      <span>+{members.length - 2}</span>
                    </div>
                  </div>
                  <Tooltip
                    anchorSelect="#id_user_hidden"
                    className="bg-slate-300 border-2 border-gray-500"
                    openOnClick
                  >
                    {members.map((member: userInterface, index: number) =>
                      index >= 2 ? (
                        <div key={member.uid}>
                          <div
                            id={member.uid}
                            className={`avatar cursor-pointer ${
                              member.photoURL ? "" : "placeholder"
                            }`}
                          >
                            <div
                              className={`w-8 ${
                                member.photoURL
                                  ? ""
                                  : "bg-neutral-focus text-neutral-content"
                              }`}
                            >
                              {member.photoURL ? (
                                <img src={member.photoURL} />
                              ) : (
                                <span>
                                  {member.displayName.charAt(0).toUpperCase()}
                                </span>
                              )}
                            </div>
                          </div>
                          <Tooltip anchorSelect={`#${member.uid}`}>
                            <button>{member.displayName}</button>
                          </Tooltip>
                        </div>
                      ) : (
                        <></>
                      )
                    )}
                  </Tooltip>
                </>
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderChatWindow;
