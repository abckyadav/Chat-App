import "./App.css";
import Messenger from "./components/Messenger";
import AccountProvider from "./Context/AccountProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientId =
    "75251371300-127nghmplqj442veo0pvlltcj0bjpt30.apps.googleusercontent.com";
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
          <Messenger />
        </AccountProvider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
