export default function capitalizeWords(str) {
  // jika string kosong, atau nilainya adalah falsy
  // maka langsung return array kosong
  if (!str) return "";

  return str
    .toLowerCase()
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");
}
