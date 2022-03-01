import Cookies from "universal-cookie";
import axios from "axios";
import { BASE_URL } from "../utils/constants";


export const authenticate = async (user, isLogin) => {
    const cookies = new Cookies();

    const { fullName, username, password, phoneNumber } = user;

    const {
        data: { token, userId, hashedPassword },
    } = await axios.post(`${BASE_URL}/${isLogin ? "login" : "signup"}`, {
        username,
        password,
        fullName,
        phoneNumber,
    }).catch((err) => console.log(err.message));

    cookies.set("token", token);
    cookies.set("username", username);
    cookies.set("fullName", fullName);
    cookies.set("userId", userId);

    if (!isLogin) {
        cookies.set("phoneNumber", phoneNumber);
        cookies.set("hashedPassword", hashedPassword);
    }
}