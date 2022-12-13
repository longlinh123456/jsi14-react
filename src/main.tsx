import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom"
import SignIn from "./lesson_7/SignIn"
import SignUp from "./lesson_7/SignUp"
import PageNotFound from "./lesson_7/PageNotFound"
import ResetPassword from "./lesson_7/ResetPassword"

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
