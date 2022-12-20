import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./lesson_8/index.css"
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom"
import SignIn from "./SignIn"
import PageNotFound from "./PageNotFound"

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
		path: "*",
		element: <PageNotFound />
	},
])

  
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
