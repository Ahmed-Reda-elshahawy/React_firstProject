import Header from "./Header";
import Footer from "./Footer"

export default function Login() {
    return (
        <>
            <Header />
            <div className="bg-image">
                <div id="log_in">
                    <h2>Log In</h2>
                    <form action="" className="input_form_signin">
                        <p>Username</p>
                        <input type="text" name="" id="input-text" placeholder="Enter Username" required />
                        <p>Password</p>
                        <input type="password" name="" id="input-password" placeholder="Enter Password" required />
                        <br />
                        <input type="checkbox" name="" id="input-check" /> <span>Remember password</span><br />
                        <button id="btn" type="submit">login</button>
                    </form>
                </div>
            </div>
        </>
    )
}