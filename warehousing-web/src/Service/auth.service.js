import axios from "axios";

// const config = {
//   headers: { "Authorization": `Bearer ${token}` }
// };

const login = async (email, password) => {
  const response = await axios
    .post('https://inventorymanagementsystem-api.herokuapp.com/api/v1/users/login', {
      email,
      password
    });
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("token", response.data);
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("token", response.data);
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  login,
  logout,
  getCurrentUser,
};