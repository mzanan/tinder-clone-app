import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-clone-00.herokuapp.com"
});

export default instance;