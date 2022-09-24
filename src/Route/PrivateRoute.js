import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
	<>
		{currentUser && (
			<Route {...rest}>{(props) => <Component {...props} />}</Route>
		)}
		
		{!currentUser && (
			<Redirect to="/login" />
		)}
	</>
  )
}