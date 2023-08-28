const UserInfo = () => {
  return (
    <div className="w-full grid grid-cols-[2fr_1fr]">
      <div className="flex flex-row items-center">
        <img
          src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-Facebook.jpg?ssl=1"
          alt="This is user avatar"
          className="w-10 h-10 rounded-full"
        />
        <p className="ml-1">User name</p>
      </div>
      <button className="border border-white rounded-md mr-2 hover:bg-white hover:text-black">
        Đăng xuất
      </button>
    </div>
  );
};

export default UserInfo;
