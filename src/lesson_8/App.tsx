import {useState, useEffect} from "react"
import axios from "axios"
import AnimeInfo from "./AnimeInfo"
import {useNavigate} from "react-router-dom"
import {signOut} from "firebase/auth"
import {auth} from "../config/firebase"

function App() {
	const navigate = useNavigate()
	const API_URL = "https://gogoanime.consumet.org/popular"
	const [displayUser, setDisplayUser] = useState("")

	const [filmData, setFilmDatas] = useState([])

	async function logOut() {
		await signOut(auth)
		navigate("/signIn")
	}

	const fetchAnime = async() => {
		const response = await axios.get(API_URL)
		const data = response.data
		setFilmDatas(data)
	}

	useEffect(
		() => {
			if (!auth.currentUser) {
				navigate("/signIn")
				return
			}
			fetchAnime()
			setDisplayUser(auth.currentUser.email as string)
		},
		[]
	)

	return (
		<div className="flex h-full w-full flex-1 items-center justify-center bg-[#6D67E4]">
			<div className='absolute top-6 left-6'>
				<h1 className="text-xl font-bold text-white">Welcome {displayUser}</h1>
			</div>
			<div>
				<button 
					onClick={logOut}
					className="absolute top-4 right-4 rounded-lg bg-blue-100 px-6 py-3 font-medium text-blue-500">
					Log out
				</button>
			</div>

			<div>
				<AnimeInfo filmData = {filmData} />
			</div>
		</div>
	)
}

export default App