export const randomColor = (order: number): string => {
  if (order % 2 === 0) return "bg-blue-500";
  if (order % 3 === 0) return "bg-red-500";
  if (order % 5 === 0) return "bg-green-500";
  else return "bg-yellow-500";
};
