import Append from "./Append"
import Display from "./Display"

function App() {
	return <div className="flex flex-row items-stretch">
		<div className="h-screen flex-1 bg-blue-300">
			<Display />
		</div>
		<div className="flex h-screen flex-1 items-center bg-red-300">
			<Append />
		</div>
	</div>
}

export default App