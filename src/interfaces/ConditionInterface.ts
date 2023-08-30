export interface conditionInterface {
  fieldName: string // tên trường dữ liệu so sánh
  operator: "==" | "<" | "<=" | ">" | ">=" | "array-contains" | "in"; // toán tử so sánh
  compareValue: string | number | string[] // giá trị được so sánh
}