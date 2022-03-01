import AuthForm from "./components/AuthForm";
import ChatContainer from "./components/ChatContainer";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";
import { API_KEY } from "./secrets";

const cookies = new Cookies();
const authToken = cookies.get("token");
const client = StreamChat.getInstance(API_KEY);

//Check if there is a user logged in
if (authToken) {
  client.connectUser(
    {
      id: cookies.get("userId"),
      name: cookies.get("username"),
      fullName: cookies.get("fullName"),
      hashedPassword: cookies.get("hashedPassword"),
      phoneNumber: cookies.get("phoneNumber"),
    },
    authToken
  );
}

function App() {
  //Logout user
  const handleLogout = (e) => {
    e.preventDefault();

    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("username");
    cookies.remove("fullName");
    cookies.remove("hashedPassword");
    cookies.remove("phoneNumber");

    window.location.reload();
  };

  if (!authToken) {
    return <AuthForm />;
  }
  return (
    <>
      <ChatContainer client={client} />
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default App;
