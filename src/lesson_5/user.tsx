import {useState} from "react"

function User() {
	const [data] = useState({
		name: "abc",
		age: 17,
		phone: 1234,
		class: "jsi14"
	})
	return <div className="flex flex-col text-center">
		<h2>Name: {data.name || "defaultName"}</h2>
		<h2>Age: {data.age || "defaultAge"}</h2>
		<h2>Phone: {data.phone || "defaultPhone"}</h2>
		<h2>Class: {data.class || "defaultClass"}</h2>
	</div>
}
export default User
