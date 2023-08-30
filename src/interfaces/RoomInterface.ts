export interface roomInterface {
  id?: string // id của room
  name: string // tên room
  description: string // mô tả room
  members?: string[] // danh sách id các user trong room này
}