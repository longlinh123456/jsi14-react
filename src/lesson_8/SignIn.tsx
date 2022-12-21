import {useNavigate} from "react-router-dom"
import {useEffect} from "react"
import {signInWithPopup, GithubAuthProvider, FacebookAuthProvider} from "firebase/auth"
import {auth} from "../config/firebase"

const githubProvider = new GithubAuthProvider()
const facebookProvider = new FacebookAuthProvider()

function SignIn() {
	const navigate = useNavigate()
	async function handleGithubSignIn(e) {
		e.preventDefault()
		await signInWithPopup(auth, githubProvider)
		navigate("/")
	}
	async function handleFacebookSignIn(e) {
		e.preventDefault()
		await signInWithPopup(auth, facebookProvider)
		navigate("/")
	}

	useEffect(
		() => {
			if (auth.currentUser) {
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
			<button
				onClick={(e) => handleGithubSignIn(e)}
				type="submit"
				className="mt-4 inline-flex h-[60px] w-full items-center justify-center gap-x-2 rounded-lg border border-blue-500 bg-transparent px-8 py-12 font-sans font-semibold tracking-wide text-blue-500"
			>
				Sign In With Github
			</button>
			<button
				onClick={(e) => handleFacebookSignIn(e)}
				type="submit"
				className="mt-4 inline-flex h-[60px] w-full items-center justify-center gap-x-2 rounded-lg border border-blue-500 bg-transparent px-8 py-12 font-sans font-semibold tracking-wide text-blue-500"
			>
				Sign In With Facebook
			</button>
		</form>
	</div>
}

export default SignIn