import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../redux/nexSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
// import { Auth } from "../firebase.config.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";

const SignUP = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const firstRef = useRef("");
  const lastRef = useRef("");
  const randomString = () => {
    let result = "";
    while (result.length < 31) {
      result += Math.random().toString(36).substring(2);
    }
    return result.substring(0, 31);
  };

  const handleSignUp = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const first = firstRef.current.value;
    const last = lastRef.current.value;

    const id = randomString();
    alert(id);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("User Created Successfully");
        dispatch(
          addUser({
            _id: id,
            name: first + " " + last,
            email: email,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdchCGzgNw_aTi_Rzqn6v867Eu1Jyy2xEe9W6qH0Qq9w&s",
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1000);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        // console.log(user);
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign Out Successfully!");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" w-screen h-full bg-zinc-950 flex flex-col items-center justify-center ">
      <div className=" w-[95%] max-h-[95%] bg-[#9EE96E] flex flex-col items-center justify-center   rounded-2xl py-20">
        <div className="xs:w-3/4 min-w-[480px] w-fit h-full bg-zinc-950 flex flex-col items-center justify-center gap-10 px-6 py-20 rounded-3xl ">
          <div className="w-full flex items-center justify-center gap-10">
            <h1 className=" font-bodyFont font-semibold  text-white text-4xl">
              Create a New Account
            </h1>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-6">
            <div className="flex w-full max-w-xs items-center gap-1.5">
              <div className="grid w-1/2 max-w-xs items-center gap-1.5">
                <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  First Name
                </label>
                <input
                  placeholder="First Name"
                  id="firstName"
                  ref={firstRef}
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="grid w-1/2 max-w-xs items-center gap-1.5">
                <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Last Name
                </label>
                <input
                  placeholder="Last name"
                  id="lastName"
                  ref={lastRef}
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
            <div className="grid w-full max-w-xs items-center gap-1.5">
              <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email
              </label>
              <input
                placeholder="example@email.com"
                id="email"
                ref={emailRef}
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="grid w-full max-w-xs items-center gap-1.5">
              <div className="w-full flex justify-between items-center">
                <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Password
                </label>
                <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:text-blue-500 duration-300">
                  Forgot password?
                </label>
              </div>
              <input
                placeholder="Password"
                id="password"
                ref={passwordRef}
                type="password"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <button
              onClick={handleSignUp}
              className=" w-[75%] cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
              SignUp
            </button>
            <div className="w-full flex justify-center items-center">
              {" "}
              <h4 className="text-center text-xl text-white "> Or</h4>
            </div>

            <div
              onClick={handleGoogleLogin}
              className=" text-base w-4/5 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-4 hover:border-blue-600 cursor-pointer duration-300"
            >
              <img
                className=" w-6"
                src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/544/Google__G__Logo-512.png"
                alt=""
              />
              <span className=" tezt-sm  text-white xs:hidden">
                Sign in with Google
              </span>
            </div>
            <div className="w-[75%] flex items-center justify-center text-white">
              <h4>
                {" "}
                Already have a account?{" "}
                <Link to="/login">
                  <span className="text-blue-500">Login</span>
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default SignUP;
