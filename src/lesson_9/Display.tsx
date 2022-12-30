import {collection, getDocs} from "firebase/firestore"
import React from "react"
import {useState, useEffect} from "react"
import {db} from "../config/firebase"
import Customer from "./Customer"

const customerRef = collection(db, "customers")

function Display() {
	const [data, setData] = useState<CustomerData[]>([])
	async function updateData() {
		const snapshot = await getDocs(customerRef)
		setData(snapshot.docs.map((doc) => doc.data()) as unknown as CustomerData[])
	}
	function renderData() {
		console.log(data)
		return <>
			{data.map((data, index) => <Customer key={index} name={data.name} phone={data.email} imageUrl={data.imageUrl} email={data.email} />)}
		</>
	}
	useEffect(() => {
		updateData()
	}, [])
	return (
		<>
			<label
				htmlFor="refresh"
				className="cursor-pointer text-sm font-medium"
			></label>
			<div id="refresh" className="text-center">
				<button onClick={() => updateData()} className="my-2 inline-flex h-[15px] items-center justify-center rounded-lg bg-blue-500 px-4 py-3 font-sans font-semibold tracking-wide text-white">
					Refresh
				</button>
			</div>
			<div className="h-4/5 overflow-x-auto text-center">
				{renderData()}
			</div>
		</>
	)
}

export default Display