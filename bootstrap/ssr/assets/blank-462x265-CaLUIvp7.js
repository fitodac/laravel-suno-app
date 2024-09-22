const useUser = (user) => {
  const fullName = user ? `${user.name} ${user.lastname}` : "";
  return { fullName };
};
const userBlank = "/build/assets/blank-462x265-CeiEg4B3.webp";
export {
  userBlank as a,
  useUser as u
};
