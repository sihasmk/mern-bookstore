import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Import Flowbite React Components
import { Button, Label, TextInput } from "flowbite-react";
import { authContext } from "../context/AuthProvider";

import GoogleButton from "react-google-button";

const SignUp = () => {
  const { createUser, signUpWithGoogle } = useContext(authContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("Signed up successfully!");
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGoogleSignUp = (event) => {
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
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="relative h-screen w-screen">
      <form
        onSubmit={handleSignUp}
        className="flex max-w-md flex-col gap-4 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name@flowbite.com"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput id="password" type="password" required shadow />
        </div>

        <div className="flex items-center gap-2">
          <Label className="flex font-normal">
            If you already have an account,&nbsp;
            <Link
              to="/login"
              className="text-cyan-600 font-semibold hover:underline dark:text-cyan-500"
            >
              login here
            </Link>
          </Label>
        </div>
        <Button type="submit">Register new account</Button>
        <hr />
        <h1 className="text-center font-semibold text-md">OR</h1>
        <div className="flex justify-center">
          <GoogleButton onClick={handleGoogleSignUp} />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
