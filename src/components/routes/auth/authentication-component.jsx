import "./authentication.styles.scss";
import SignUpForm from "../../sign-up/sign-up-form.component";
import SignInForm from "../../sign-in/sign-in-form.component";

const Authentication = () => {
  // useEffect(
  //   () => async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   },
  //   []
  // );

  return (
    <div className="authentication-container">
      <SignInForm />
      {/* <button onClick={logGoogleRedirectUser}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};
export default Authentication;
