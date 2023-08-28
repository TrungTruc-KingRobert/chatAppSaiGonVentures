import React from "react";

const Message = ({
  text,
  photoURL,
  displayName,
  createdAt
}: {
  text: string;
  photoURL: string;
  displayName: string;
  createdAt: number;
}) => {
  return (
    <div className="m-2">
      <div className="flex items-center">
        {photoURL === "" ? (
          <div className="avatar placeholder">
            <div className="bg-slate-400 text-neutral-content rounded-full w-8">
              <span className="text-white">A</span>
            </div>
          </div>
        ) : (
          <div className="avatar">
            <div className="w-8">
              <img src={photoURL} />
            </div>
          </div>
        )}
        <p className="font-bold mx-2">{displayName}</p>
        <small>{createdAt}</small>
      </div>
      <p className="ml-10">{text}</p>
    </div>
  );
};

export default Message;
