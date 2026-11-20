


function PackageCard({ title, heading, locations, imageUrl, ticket }) {

    return (
        <div className="border border-gray-300 w-[260px] min-h-[220px] rounded-xl overflow-hidden mx-auto transition-transform duration-300 hover:-translate-y-2 ">
            <div className="relative overflow-hidden ">
                <img src={imageUrl} alt={heading} className="h-32 w-full object-cover"
                />

                <span className="absolute left-3 top-3 rounded-full px-3 py-1 bg-orange-600 text-xs font-medium text-white">
                    {title}
                </span>
            </div>
            <div className="p-3 flex flex-col gap-2">
                <h2 className="flex items-center gap-2 text-sm font-bold"> {heading}</h2>
                <p className="flex items-center gap-2 text-xs text-gray-600">
                    {locations}
                </p>

                <div className="flex gap-2 text-xs items-center justify-around" >
                    <p><span>₹{ticket}</span>/person</p>
                    <button type="button" className="border-2 bg-orange-700 text-white px-3 py-1 rounded-xl hover:cursor-pointer hover:bg-white hover:text-orange-700 ">Plan this yatra </button>
                </div>
            </div>
        </div>

    )
}

export default PackageCard;