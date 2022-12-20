import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import PageNotFound from "./PageNotFound"
import ResetPassword from "./ResetPassword"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},
	{
		path: "/signIn",
		element: <SignIn />
	},
	{
		path: "/signUp",
		element: <SignUp />
	},
	{
		path: "*",
		element: <PageNotFound />
	},
	{
		path: "/reset",
		element: <ResetPassword />
	}
])

  
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
