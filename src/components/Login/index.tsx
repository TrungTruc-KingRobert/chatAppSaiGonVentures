// hooks
import { useEffect, useState } from "react";

// firebase
import {
  auth,
  googleProvider,
  onAuthStateChanged
} from "../../firebase/config";
import { signInWithPopup } from "firebase/auth";

// icons
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  // Xử lý login với google
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider);
  };

  onAuthStateChanged(auth, (user) => {
    console.log("user:", user);
    if (user) {
    }
  });

  return (
    <section className="h-screen">
      <div className="h-full w-full flex flex-col gap-2 items-center justify-center">
        <h2 className="text-2xl font-bold">Chào mừng đến SGV Chat app</h2>
        <p className="text-sm text-gray-500">
          Hãy chọn hình thức đăng nhập bên dưới!
        </p>
        <div className="w-full flex flex-col sm:flex-row gap-3 items-center justify-center">
          {/* Google */}
          <button
            className="h-10 w-[252px] border rounded-md flex items-center justify-center px-4 hover:bg-gray-200"
            onClick={handleGoogleLogin}
          >
            <FcGoogle className="text-xl mr-2" /> Đăng nhập bằng Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
