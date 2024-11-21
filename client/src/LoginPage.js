import { useEffect } from "react";
import { Link } from "react-router-dom";
const LoginPage = () => {
    useEffect(() => {
        //config is optional
        
        window.catalyst.auth.signIn("login");
    }, []);
    return (
        <div className="container">
            <img
                width="80px"
                height="80px"
                src="https://cdn2.iconfinder.com/data/icons/user-management/512/profile_settings-512.png"
            />
            <h1 className="title">User Profile Management</h1>
            <div id="login"></div>
            <p className="homepage">
                <b>
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        style={{ color: "blue", textDecorationLine: "underline" }}
                    >
                        Sign-up
                    </Link>{" "}
                    now!
                </b>
            </p>
        </div>
    );
};
export default LoginPage;