import Messenger from "./components/Messenger.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider.jsx";


function App() {
  const clientId = '844098798742-pj6443j77amg3h9qcumemfp7f0j1sdua.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
