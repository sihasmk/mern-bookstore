import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

// Import Flowbite React components
import { Button, Checkbox, Label, TextInput, Alert } from "flowbite-react";
import { authContext } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

// Import React Icons
import { HiInformationCircle } from "react-icons/hi";

// Import stylesheets
import "../stylesheets/LoginAndSignUp.css";

// Import images
import googleLogo from "../assets/other-images/google-logo.svg";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { logIn, signUpWithGoogle } = useContext(authContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Logged in successfully!");
        navigate(from, { replace: true });
        // ...
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        setError(errorMessage);
        console.log([errorCode, errorMessage]);
      });
  };

  const handleGoogleLogIn = () => {
    signUpWithGoogle()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        alert("Signed up successfully!");
        navigate(from, { replace: true });

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((err) => {
        // Handle Errors here.
        const errorCode = err.code;
        const errorMessage = err.message;
        setError({ errorCode, errorMessage });
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(err);
        // ...
      });
  };

  console.log(error);

  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <div className="py-10 px-20 bg-blue-200 rounded flex lg:w-[450px] md:w-[380px]  flex-col gap-4 ">
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              name="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput id="password" name="password" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          {error && (
            <Alert color="failure" icon={HiInformationCircle}>
              <span className={"font-medium"}>Info alert!</span> Change a few
              things up and try submitting again.
            </Alert>
          )}

          <div className="flex items-center gap-2">
            <Label className="flex font-normal">
              If you don't have an account,&nbsp;
              <Link
                to="/sign-up"
                className="text-cyan-600 font-semibold hover:underline dark:text-cyan-500"
              >
                sign-up here
              </Link>
            </Label>
          </div>
          <Button type="submit">Login</Button>
        </form>
        <hr className="hr-text gradient" data-content="OR" />
        <div className="flex justify-center">
          <button onClick={handleGoogleLogIn}>
            <div className="flex items-center">
              <img
                src={googleLogo}
                className="w-[50px] border border-blue-300 rounded-sm hover:bg-blue-300"
              />
              <div className="border border-blue-300 rounded-sm font-semibold p-[12px] hover:bg-blue-300">
                Log in with Google
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
