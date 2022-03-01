const { connect } = require("getstream");
const bcrypt = require("bcrypt");
const StreamChat = require("stream-chat").StreamChat;
const crypto = require("crypto");

require('dotenv').config();

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_API_ID;

const login = async (req, res) => {
    try {

        const { username, password } = req.body;

        //connection to the server
        const serverClient = connect(api_key, api_secret, app_id);

        //create a new instance of stream chat
        const client = StreamChat.getInstance(api_key, api_secret);

        const { users } = await client.queryUsers({ name: username });


        //Check if user exists
        if (!users.length) {
            return res.status(400).json({ "message": "User not found." })
        }

        //Compare passwords
        const success = await bcrypt.compare(password, users[0].hashedPassword);

        //Create a user token
        const token = serverClient.createUserToken(users[0].id);


        if (success) {
            res.status(200).json({
                "token": token,
                "fullName": users[0].fullName,
                "username": users[0].username,
                "userId": users[0].id
            });
        } else {
            res.status(500).json({ "message": "Incorrect Password." })
        }

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};


const signup = async (req, res) => {
    try {
        const { fullName, username, password, phoneNumber } = req.body;

        //generate random id
        const userId = crypto.randomBytes(16).toString("hex");

        //connection to the server
        const serverClient = connect(api_key, api_secret, app_id);

        //Hashing the password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create a user token
        const token = serverClient.createUserToken(userId);

        res.status(200).json({
            token,
            userId,
            username,
            fullName,
            hashedPassword,
            phoneNumber
        });

    } catch (error) {
        console.log(error.message);

        res.status(500).json({ message: error.message });
    }
};


module.exports = { signup, login };