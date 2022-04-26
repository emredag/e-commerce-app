import axios, { URL } from "./Axios";

export const fetchLogin = async (input) => {
  const data = await axios
    .post(URL.login, input)
    .then((response) => {
      //   navigate("/");
      //   setUser({
      //     email: response.data.user.email,
      //     token: response.data.jwt,
      //   });
      const signature = `Bearer ${response.data.jwt}`;
      axios.defaults.headers["Authorization"] = signature;
      console.log(response.data.user.id);
    })
    .catch((error) => {
      console.log(error.response);
    });

  return data;
};
