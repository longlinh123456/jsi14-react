import {addDoc, collection} from "firebase/firestore"
import {useRef} from "react"
import {db} from "../config/firebase"

const customerRef = collection(db, "customers")

function Append() {
	const email = useRef("")
	const name = useRef("")
	const phoneNumber = useRef(0)
	const imageUrl = useRef("")
	function append(e) {
		e.preventDefault()
		addDoc(customerRef, {
			email: email.current,
			name: name.current,
			phoneNumber: phoneNumber.current,
			imageUrl: imageUrl.current
		})
	}
	return (
		<>
			<form
				autoComplete="off"
				aria-label="data-append-form"
				className="flex w-full flex-col content-center items-center"
			>
				<h2 className="mb-10 text-center text-3xl font-bold">Add Customer</h2>
				<div className="mx-5 mb-5 flex w-4/5 flex-col items-start gap-y-3">
					<label htmlFor="name" className="cursor-pointer text-sm font-medium">
				Name
					</label>
					<input
						id="name"
						type="text"
						className="w-full rounded-lg border border-gray-200 bg-transparent p-4 outline-none"
						placeholder="Enter customer name"
						onInput={(e) => name.current = (e.target as HTMLInputElement).value}
					/>
				</div>
				<div className="mx-5 mb-5 flex w-4/5 flex-col items-start gap-y-3">
					<label
						htmlFor="email"
						className="cursor-pointer text-sm font-medium"
					>
				Email
					</label>
					<input
						id="email"
						type="email"
						className="w-full rounded-lg border border-gray-200 bg-transparent p-4 outline-none"
						placeholder="Enter customer email"
						onInput={(e) => email.current = (e.target as HTMLInputElement).value}
					/>
				</div>
				<div className="mx-5 mb-5 flex w-4/5 flex-col items-start gap-y-3">
					<label
						htmlFor="phone"
						className="cursor-pointer text-sm font-medium"
					>
				Phone number
					</label>
					<input
						id="phone"
						type="tel"
						className="w-full rounded-lg border border-gray-200 bg-transparent p-4 outline-none"
						placeholder="Enter customer phone number"
						onInput={(e) => phoneNumber.current = Number((e.target as HTMLInputElement).value)}
					/>
				</div>
				<div className="mx-5 mb-5 flex w-4/5 flex-col items-start gap-y-3">
					<label
						htmlFor="imageUrl"
						className="cursor-pointer text-sm font-medium"
					>
				Avatar URL
					</label>
					<input
						id="imageUrl"
						type="url"
						className="w-full rounded-lg border border-gray-200 bg-transparent p-4 outline-none"
						placeholder="Enter URL"
						onInput={(e) => imageUrl.current = (e.target as HTMLInputElement).value}
					/>
				</div>
				<button
					type="submit"
					className="mx-5 inline-flex h-[60px] w-4/5 items-center justify-center rounded-lg bg-blue-500 px-8 py-4 font-sans font-semibold tracking-wide text-white"
					onClick={(e) => append(e)}
				>
				Create an account
				</button>
			</form>
		</>
	)
}

export default Append