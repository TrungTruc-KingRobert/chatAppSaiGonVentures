/**
 * Component loading dạng vòng tròn xoay phân mảnh
 * @param {string} typeLoading - nhận vào 2 giá trị là "page" hoặc "component", mặc định không truyền vào sẽ là "page".
 */
const LoadingOverlay = ({ typeLoading = "page" }: { typeLoading?: string }) => {
  return (
    <div
      className={`${
        typeLoading === "page" ? "fixed" : "absolute"
      } top-0 left-0 z-1000 w-full h-full flex justify-center items-center bg-black bg-opacity-40`}
    >
      <div className="text-white text-2xl">
        <div
          aria-label="Loading..."
          role="status"
          className="flex flex-col items-center space-x-2"
        >
          <svg
            className="h-20 w-20 animate-spin"
            viewBox="0 0 256 256"
          >
            <line
              x1="128"
              y1="32"
              x2="128"
              y2="64"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
              className="stroke-white"
            ></line>
            <line
              x1="195.9"
              y1="60.1"
              x2="173.3"
              y2="82.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
              className="stroke-slate-50"
            ></line>
            <line
              x1="224"
              y1="128"
              x2="192"
              y2="128"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
              className="stroke-slate-100"
            ></line>
            <line
              x1="195.9"
              y1="195.9"
              x2="173.3"
              y2="173.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
              className="stroke-slate-200"
            ></line>
            <line
              x1="128"
              y1="224"
              x2="128"
              y2="192"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
              className="stroke-slate-300"
            ></line>
            <line
              x1="60.1"
              y1="195.9"
              x2="82.7"
              y2="173.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
              className="stroke-slate-400"
            ></line>
            <line
              x1="32"
              y1="128"
              x2="64"
              y2="128"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
              className="stroke-slate-500"
            ></line>
            <line
              x1="60.1"
              y1="60.1"
              x2="82.7"
              y2="82.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
              className="stroke-slate-600/50"
            ></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
