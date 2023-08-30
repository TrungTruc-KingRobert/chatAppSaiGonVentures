# ChatApp cho bài kiểm tra của Saigon Ventures

## Bắt đầu

### Điều kiện bắt buộc

- Node.js
- Java (jdk > 11)

### Installation

1. Chép kho lưu trữ về máy: `https://github.com/TrungTruc-KingRobert/chatAppSaiGonVentures.git`

2. Điều hướng vào dự án: `cd chatAppSaiGonVentures`

3. Cài đặt khác: Java and Node.js

### Khởi chạy

1. Nhập lệnh `npm install` tại thư mục gốc của dự án.
2. Điều hướng vào thư mục `emulators` và nhập lệnh `firebase emulators:start` để chạy máy ảo của firebase cụ bộ
3. Trở lại thư mục gốc của dự án, nhập lệnh `npm run dev` để khởi chạy dự án

## Tính năng

- Đăng nhập bằng và xác thực bằng tài khoản Google thông qua firebase (có thể tạo tài khoản ngẫu nhiên để kiểm thử nhưng hãy dẫn một đường link đến `photoURL` để thấy được avatar sẽ hiển thị như thế nào, ví dụ: `https://i.pravatar.cc/150?img=52`)
- Đăng xuất
- Tạo thêm phòng chat: nhấn vào `Thêm phòng` sẽ có một modal hiện ra, nhập tên phòng (bắc buộc) và mô tả phòng sau đó nhấn `Ok` để xác nhận
- Mời người dùng khác vào phòng: nhấn `Mời` sẽ có một modal hiện ra, hãy nhập chuỗi ký tự có trong tên của người sẽ được mời vào ô tìm kiếm, những người dùng có chuỗi ký tự đó sẽ hiển thị ra bên dưới ô tìm kiếm, sau đó nhấn vào nút mời, người đó sẽ được thêm vào danh sách được mời phía dưới, sau cùng nhấn vào nút `Ok` để xác nhận
- Có thể gửi tin nhắn văn bản, sau khi nhập sau có thể nhấn vào nút `Gửi` hoặc nhấn phím `Enter` để gửi

## Các công nghệ được dùng

1. `Reactjs`, `Vitejs`, `Tailwindcss`, `Firebase`, `Firebase Local Emulator Suite`, `Typescript`
2. Các thư viện khác: `react-hook-form`, `react-toastify`, `react-icons`, `react-router-dom`, `react-tooltip`, `date-fns`, `daisyui`

## Liên hệ

Email: trucleksk@gmail.com
