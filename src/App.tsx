import {useState, useEffect} from "react"
import axios from "axios"
import AnimeInfo from "./lesson_7/AnimeInfo"
import {useNavigate} from "react-router-dom"
import accountDB from "./lesson_7/accountDB"

function App() {
	const navigate = useNavigate()
	const API_URL = "https://gogoanime.consumet.org/popular"

	const [filmData, setFilmDatas] = useState([])

	function logOut() {
		accountDB.logOut()
		navigate("/signIn")
	}

	const fetchAnime = async() => {
		const response = await axios.get(API_URL)
		const data = response.data
		setFilmDatas(data)
	}

	useEffect(
		() => {
			if (!accountDB.getCurrentAccount()) {
				navigate("/signIn")
				return
			}
			
			fetchAnime()
			return () => {
				setFilmDatas([])
			}
		},
		[]
	)

	return (
		<div className="flex h-full w-full flex-1 items-center justify-center bg-[#6D67E4]">
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