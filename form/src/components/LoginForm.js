
import './LoginForm.css';

function LoginForm() {
    return (
    <div className="login-form">
        <h3 className="login-heading">Log In</h3>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
    </div>
    );
}

export default LoginForm;