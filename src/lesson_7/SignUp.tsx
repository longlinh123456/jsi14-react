import {useEffect, useState, useRef} from "react"
import {Link, useNavigate} from "react-router-dom"
import accountDB from "./accountDB"

enum Failure {
	None,
	PasswordMismatch,
	AlreadyExistingAccount
}
function SignUp() {
	const email = useRef("")
	const password = useRef("")
	const confirmPassword = useRef("")
	const [failure, setFailure] = useState(Failure.None)
	const navigate = useNavigate()

	function handleSignUp(e) {
		e.preventDefault()
		if (password !== confirmPassword) {
			return setFailure(Failure.PasswordMismatch)
		}
		if (accountDB.signUp(email.current, password.current)) {
			navigate("/")
		} else {
			setFailure(Failure.AlreadyExistingAccount)
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
			<h2 className="mb-10 text-center text-3xl font-bold">Sign Up An Account</h2>
			<div className="mb-5 flex flex-col items-start gap-y-3">
				<label htmlFor="email" className="cursor-pointer text-sm font-medium">
						Email
				</label>
				<input
					id="email"
					type="email"
					className="w-full rounded-lg border border-gray-200 bg-transparent p-4 outline-none"
					placeholder="Enter your email address"
					onInput={(e) => email.current = (e.target as HTMLInputElement).value}
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
					onInput={(e) => password.current = (e.target as HTMLInputElement).value}
				/>
			</div>
			<div className="mb-5 flex flex-col items-start gap-y-3">
				<label
					htmlFor="password"
					className="cursor-pointer text-sm font-medium"
				>
					Confirm Password
				</label>
				<input
					id="password"
					type="password"
					className="w-full rounded-lg border border-gray-200 bg-transparent p-4 outline-none"
					placeholder="Re-enter your password"
					onInput={(e) => confirmPassword.current = (e.target as HTMLInputElement).value}
				/>
			</div>
			{
				(failure === Failure.AlreadyExistingAccount)
					? <div className="mb-5 flex items-center justify-center text-red-600">
						<p>Account already exists</p>
					</div>
					: null
			}
			{
				(failure === Failure.PasswordMismatch)
					? <div className="mb-5 flex items-center justify-center text-red-600">
						<p>Confirmed password doesn't match</p>
					</div>
					: null
			}
			<div className="mb-5 flex items-center justify-end text-slate-400">
				<p>Already have an account?&nbsp;</p>
				<Link
					to="/signIn"
					className="text-blue-500 underline">
					Sign In
				</Link>
			</div>
			<div className="mb-5 flex items-center justify-end text-slate-400">
				<p>Forgot your password?&nbsp;</p>
				<Link 
					to="/reset"
					className="ml-2 text-blue-500 underline">
						Reset Password
				</Link>
			</div>
			<button
				onClick={(e) => handleSignUp(e)}
				type="submit"
				className="inline-flex h-[60px] w-full items-center justify-center rounded-lg bg-blue-500 px-8 py-4 font-sans font-semibold tracking-wide text-white"
			>
				Create an account
			</button>
		</form>
	</div>
}

export default SignUp

// khi ấn nút đăng kí : cần điền đủ thông tin : email, password, confirm password mới cho đăng kí
// khi ng dùng đã có tài khoàn rồi => bấm nút sign in sẽ trực tiếp chuyển đến trang sign in
