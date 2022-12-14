import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import { AuthProvider } from "../context/AuthContext";
import PrivateRoute from "../Route/PrivateRoute";
import PublicRoute from "../Route/PublicRoute";

function App() {
	console.log("Rendered App");
	return (
		<Router>
			<AuthProvider>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
						<PublicRoute exact path="/signup" component={Signup} />
						<PublicRoute exact path="/login" component={Login} />
						<PrivateRoute exact path="/quiz" component={Quiz} />
						<PrivateRoute exact path="/result" component={Result} />
					</Switch>
				</Layout>
			</AuthProvider>
		</Router>
	);
}

export default App;