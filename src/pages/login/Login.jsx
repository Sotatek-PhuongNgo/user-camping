import "./login.scss";

function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome to camping.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            labore molestias quo quas odit adipisci sit, excepturi itaque? Ipsam
            aliquid voluptatibus illo numquam maiores ab voluptate molestiae non
            quae nam?
          </p>
          <span>Don'n not have an account?</span>
          <button> register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
