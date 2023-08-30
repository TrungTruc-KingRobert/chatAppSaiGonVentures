// firebase
import { Timestamp } from "firebase/firestore";

import { formatRelative } from "date-fns";

const Message = ({
  text,
  photoURL,
  displayName,
  createdAt
}: {
  text: string;
  photoURL: string;
  displayName: string;
  createdAt: Timestamp;
}) => {
  const formatDate = (seconds: number) => {
    let formattedDate = "";

    if (seconds) {
      formattedDate = formatRelative(new Date(seconds * 1000), new Date());

      formattedDate =
        formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }

    return formattedDate;
  };

  return (
    <div className="m-2">
      <div className="flex items-center">
        {photoURL === "" ? (
          <div className="avatar placeholder">
            <div className="bg-slate-400 text-neutral-content rounded-full w-8">
              <span className="text-white">
                {displayName.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
        ) : (
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src={photoURL} />
            </div>
          </div>
        )}
        <p className="font-bold mx-2">{displayName}</p>
        <small>{formatDate(createdAt.seconds)}</small>
      </div>
      <p className="ml-10">{text}</p>
    </div>
  );
};

export default Message;
