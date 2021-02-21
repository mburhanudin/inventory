const getAuthToken = () => {
  const user = localStorage.getItem("user");
  return user ? (typeof user === "object" ? user : JSON.parse(user))  : null;
};

export default getAuthToken;
