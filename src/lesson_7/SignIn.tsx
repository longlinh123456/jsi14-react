import {Link, useNavigate} from "react-router-dom"
import accountDB from "./accountDB"
import {useEffect, useState} from "react"
function SignIn() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [failure, setFailure] = useState(false)
	const navigate = useNavigate()
	function handleSignIn(e, email, password) {
		e.preventDefault()
		if (accountDB.logIn(email, password)) {
			navigate("/")
		} else {
			setFailure(true)
		}
	}

	useEffect(
		() => {
			if (accountDB.getCurrentAccount()) {
				navigate("/")
				return
			}
		},
		[]
	)
	
	return <div className='flex h-screen flex-1 items-center justify-center bg-[#B3FFAE]'>
		<form
			autoComplete="off"
			className="w-full max-w-[600px] rounded-lg bg-white p-10 shadow"
			aria-label="signup-form"
		>
			<h2 className="mb-10 text-center text-3xl font-bold">Sign In </h2>
			<div className="mb-5 flex flex-col items-start gap-y-3">
				<label htmlFor="email" className="cursor-pointer text-sm font-medium">
						Email
				</label>
				<input
					id="email"
					type="email"
					className="w-full rounded-lg border border-gray-200 bg-transparent p-4 outline-none"
					placeholder="Enter your email address"
					onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
				/>
			</div>
			<div className="mb-5 flex flex-col items-start gap-y-3">
				<label
					htmlFor="password"
					className="cursor-pointer text-sm font-medium"
				>
					Password
				</label>
				<input
					id="password"
					type="password"
					className="w-full rounded-lg border border-gray-200 bg-transparent p-4 outline-none"
					placeholder="Enter your password"
					onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
				/>
			</div>
			{
				failure
					? <div className="mb-5 flex items-center justify-center text-red-600">
						<p>Invalid email or password</p>
					</div>
					: null
			}
			<div className="mb-5 flex items-center justify-end text-slate-400">
				<p>Forgot your password?&nbsp;</p>
				<Link 
					to="/reset"
					className="ml-2 text-blue-500 underline">
						Reset Password
				</Link>
			</div>
			<div className="mb-5 flex items-center justify-end text-slate-400">
				<p>Don't have an account?&nbsp;</p>
				<Link 
					to="/signUp"
					className="ml-2 text-blue-500 underline">
						Sign Up
				</Link>
			</div>
			<button
				onClick={(e) => handleSignIn(e, email, password)}
				type="submit"
				className="inline-flex h-[60px] w-full items-center justify-center rounded-lg bg-blue-500 px-8 py-4 font-sans font-semibold tracking-wide text-white"
			>
					Sign In
			</button>
		</form>
	</div>
}

export default SignIn