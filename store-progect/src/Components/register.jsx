import Header from "./Header";
import Footer from "./Footer";

export default function Register() {
    return (
        <>
            <Header />
            <div className="bg-image">
                <div id="register">
                    <h2>Register</h2>
                    <form action="" className="input_form_register">
                        <p>first name</p>
                        <input type="text" id="input_fname" placeholder="Enter first name" required />
                        <p>last name</p>
                        <input type="text" id="input_lname" placeholder="Enter last name" required />
                        <p>Username</p>
                        <input type="text" id="input-text" placeholder="Enter Username" required />
                        <p>Password</p>
                        <input type="password" id="input-password" placeholder="Enter Password" required />
                        <br />
                        <input type="checkbox" id="input-check" /> <span>Remember password</span><br />
                        <button id="btn" type="submit">register</button>
                    </form>
                </div>
            </div>
        </>
    )
}