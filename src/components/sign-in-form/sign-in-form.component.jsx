import React, { useState } from "react";
import {
  emailAndPasswordSignIn,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import FormInput from "../form-input/form-input.components";
import { SignInFormButtonsContainer, SignInFormContainer, SignInFormHeading } from "./sign-in-form.styles";


const defaultformFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { email, password } = formFields;



  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailAndPasswordSignIn(email, password);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("user does not found");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <SignInFormContainer>
      <SignInFormHeading>Already have an account?</SignInFormHeading>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          required
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          required
          name="password"
          value={password}
        />
        <SignInFormButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            GOOGLE SIGN IN
          </Button>
        </SignInFormButtonsContainer>
      </form>
    </SignInFormContainer>
  );
};

export default SignInForm;
