import "./myAccount.css";
import Button from "../../UI/Button/Button";
function MyAccount() {
  return (
    <div className="myAccount-wrapper section-padding section-margin">
      <div className="top">
        <div className="title">
          <h1>My Account</h1>
        </div>
        <span>Login</span>
      </div>
      <div className="bottom">
        <form className="login-form">
          <input type="email" id="email" placeholder="E-mail Address*" />
          <input type="password" id="password" placeholder="Password*" />
          <div className="remember-me flex">
            <input type="checkbox" />
            <span>Remember me later</span>
          </div>
          <Button>Login</Button>
          <div className="lost-your-password">
            <a href="" className="font-semibold">
              Lost your password ?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MyAccount;
