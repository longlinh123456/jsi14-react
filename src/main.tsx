import React from "react"
import ReactDOM from "react-dom/client"
import App from "./lesson_8/App"
import "./index.css"
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom"
import SignIn from "./lesson_8/SignIn"
import PageNotFound from "./lesson_8/PageNotFound"

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
