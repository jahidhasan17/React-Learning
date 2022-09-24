import { Link } from "react-router-dom";
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
// import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Login() {
	console.log("Rendered Login");
	
	return (
		<div style={{ margin : "100px 0" }}>
			<h1 style={{ textAlign : "center" }}>Login to your account</h1>

			<Form className={`${classes.login}`}>
				<TextInput
					type="text"
					placeholder="Enter email"
					icon="alternate_email"
				/>

				<TextInput type="password" placeholder="Enter password" icon="lock" />

				<Button>
					<span>Submit Now</span>
				</Button>

				<div className="info">
					Don't have an account? <Link to="/signup">Signup</Link> instead.
				</div>
			</Form>
		</div>
	);
}