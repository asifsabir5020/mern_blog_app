import axios from "axios";
import { getAuthTokenFromLocal } from "./auth";

axios.defaults.baseURL = "http://localhost:5000/api/v1";
const token = getAuthTokenFromLocal();
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
