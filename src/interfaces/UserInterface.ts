export interface userInterface {
  uid: string // uid của google
  email: string // email của google
  displayName: string // tên hiển thị của google
  photoURL: string // đường dẫn đến avatar của google
  providerId?: string // xác định phương thức đăng nhập là gmail "google.com"
}