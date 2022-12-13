const FilmDetails = (props) => {
	const {filmData} = props

	const renderFilm = () => {
		return filmData.map((item, index) => {
			return (
				<div
					key={index}
					aria-label="card-item-v3"
					className="mx-4 flex w-full flex-col rounded-xl border border-gray-100 bg-white p-5 "
				>
					<div className="relative mb-5 h-[250px] w-[300px] shrink-0 gap-x-2">
						<h3 className="mb-3 text-lg font-bold">
							{item.animeId}
						</h3>
						<img
							src={item.animeImg}
							alt=""
							className="h-full w-full rounded-lg object-cover"
						/>
					</div>
					<div className="flex flex-1 flex-col">
						<h3 className="mb-3 text-lg font-bold">
							{item.animeTitle}
						</h3>
						<h3 className="mb-3 text-lg font-bold">
							{item.releasedDate}
						</h3>
					</div>
				</div>
			)
		})
	}

	return (
		<div className="flex h-[550px]  w-screen max-w-screen-2xl  flex-1 items-center justify-center overflow-scroll overflow-y-hidden">
			{renderFilm()}
		</div>
	)
}

export default FilmDetails