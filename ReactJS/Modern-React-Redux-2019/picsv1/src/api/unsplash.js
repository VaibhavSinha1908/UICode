import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 5fac84f9a0c473d0af2fcad80539db8b6fb3a446b13788b3e2a0ddad6e9a7400"
  }
});
