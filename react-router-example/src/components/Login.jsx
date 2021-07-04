import LoginButton from "./LoginButton";

export default function Login(props) {
  // console.log(props.history);

  return (
    <div>
      <h2>Login Page</h2>
      {/* <LoginButton {...props} /> */}
      <LoginButton />
    </div>
  );
}
