import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";
import axios from "axios";

initializeAuthentication();

const useFirebase = () => {
  //User behavior state
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  //Logged user is here
  // console.log("User ffrom useFirebase");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Google Sign in
  const signInWithGoogle = (location, navigate) => {
    let from = location?.state?.from?.pathname || "/";

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        //Save user Info in database
        saveUserInDb(user?.email, user?.displayName, "POST");
        navigate(from, { replace: true });
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //Register User With Email & Password
  const registerUserWithEmailPassword = () => {
    // eslint-disable-next-line no-undef
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Login with Email and Password Method
  const logInWithEmailPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Persist User state with OnAuthStateChange
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      //set and get token
      if (currentUser) {
        //Axios Post
        axios
          .post(`https://hungry-place-restaurant-server.vercel.app/jwt`, {
            email: currentUser.email,
          })
          .then((data) => {
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => unSubscribe();
  });

  // Logout Method
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  //Save User To Database
  const saveUserInDb = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://hungry-place-restaurant-server.vercel.app/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return {
    user,
    error,
    loading,
    signInWithGoogle,
    registerUserWithEmailPassword,
    logInWithEmailPassword,
    logOut,
  };
};

export default useFirebase;
