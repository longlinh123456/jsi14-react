import React from "react"

function Customer({name, phone, imageUrl, email}) {
	return (
		<div className="mx-auto inline-block h-1/2 w-[95%] rounded-lg bg-blue-600">
			<div className="my-2 block text-center">
				<img className="mx-auto aspect-[3/4] max-h-[150px] max-w-[200px]" src={imageUrl} alt=""></img>
			</div>
			<div className="py-2">
				<p>Name:&nbsp;{name}</p>
			</div>
			<div className="py-2">
				<p>Email:&nbsp;{email}</p>
			</div>
			<div className="py-2">
				<p>Phone number:&nbsp;{phone}</p>
			</div>
		</div>
	)
}

export default Customer