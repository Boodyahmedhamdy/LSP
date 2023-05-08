// local storage functions

const setAuthUser = (data) => {
    // Stringify OBJECT TO TEXT
    localStorage.setItem("user", JSON.stringify(data));
  };
  
const getAuthUser = (data) => {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    }
  };
  
const removeAuthUser = () => {
    if (localStorage.getItem("user")) {
        localStorage.removeItem("user");
    }
  };


module.exports={
    setAuthUser,
    getAuthUser,
    removeAuthUser
}