import {useEffect, useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import accountDB from "./accountDB"

function ResetPassword() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [failure, setFailure] = useState(false)
	const [success, setSuccess] = useState(false)
	const navigate = useNavigate()
	function handleReset(e) {
		e.preventDefault()
		if (accountDB.resetPassword(email, password)) {
			setFailure(false)
			setSuccess(true)
		} else {
			setFailure(true)
			setSuccess(false)
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
			<h2 className="mb-10 text-center text-3xl font-bold">Reset Password</h2>
			<div className="mb-5 flex flex-col items-start gap-y-3">
				<label htmlFor="email" className="cursor-pointer text-sm font-medium">
					Email
				</label>
				<input
					id="email"
					type="email"
					className="w-full rounded-lg border border-gray-200 bg-transparent p-4 outline-none"
					placeholder="Enter registered email address"
					onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
				/>
			</div>
			<div className="mb-5 flex flex-col items-start gap-y-3">
				<label
					htmlFor="password"
					className="cursor-pointer text-sm font-medium"
				>
				New password
				</label>
				<input
					id="password"
					type="password"
					className="w-full rounded-lg border border-gray-200 bg-transparent p-4 outline-none"
					placeholder="Enter new password"
					onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
				/>
			</div>
			{
				failure
					? <div className="mb-5 flex items-center justify-center text-red-600">
						<p>Invalid email</p>
					</div>
					: null
			}
			{
				success
					? <div className="mb-5 flex items-center justify-center text-green-600">
						<p>Reset password successfully,&nbsp;</p>
						<Link 
							to="/signIn"
							className="ml-2 text-blue-500 underline">
						Sign In
						</Link>
					</div>
					: null
			}
			<button
				onClick={(e) => handleReset(e)}
				type="submit"
				className="inline-flex h-[60px] w-full items-center justify-center rounded-lg bg-blue-500 px-8 py-4 font-sans font-semibold tracking-wide text-white"
			>
				Reset Password
			</button>
		</form>
	</div>
}

export default ResetPassword