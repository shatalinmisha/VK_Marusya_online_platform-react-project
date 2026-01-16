import axios from "axios";

axios.create({
  baseURL: 'https://cinemaguide.skillbox.cc',
  withCredentials: true,
})