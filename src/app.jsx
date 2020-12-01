/** @format */

import "./app.css";
import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
import firebase from "firebase/app";
import "firebase/auth";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
// import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const handleGoogle = (history) => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(token);
        console.log(user);

        // Go to user.email's dashboard
        console.log(history);
        history.push("/dashboard");
      });
    // .catch((error) => {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // });
  };

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={["/", "/login"]} exact>
            <Login onGoogle={handleGoogle}></Login>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
