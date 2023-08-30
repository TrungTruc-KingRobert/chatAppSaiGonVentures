export interface messageInterface {
  id?: string // id của message
  text: string // nội dung message
  photoURL: string // avatar của người viết message
  roomId: string // id của room
  displayName: string // tên của người viết message
  createdAt?: string // thời gian viết message
}