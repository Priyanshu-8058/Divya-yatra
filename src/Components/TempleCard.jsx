import { FaLongArrowAltRight } from "react-icons/fa";
import { TbChess } from "react-icons/tb";
import { FaMapMarkerAlt } from "react-icons/fa";


function TempleCard({ title, heading, description, locations, imageUrl }) {

    return (
        <div className="border border-gray-300 w-[350px] min-h-[220px] rounded-xl overflow-hidden mx-auto transition-transform duration-300 hover:-translate-y-2 ">
            <div className="relative overflow-hidden ">
                <img src={imageUrl} alt={heading} className="h-40 w-full object-cover"
                />

                <span className="absolute left-3 bottom-3 rounded-full px-3 py-1 text-sm font-medium text-white">
                    {title}
                </span>
            </div>
            <div className="p-4 flex flex-col gap-2">
                <h1 className="flex items-center gap-2 text-xl font-bold"><span className="text-orange-800"><TbChess /></span> {heading}</h1>
            <h2 className="text-gray-700 ">{description}</h2>
            <p className="flex items-center gap-2 text-gray-600">
               <span className="text-orange-800"> <FaMapMarkerAlt /></span> {locations}
            </p>

            <button className="flex items-center gap-2 border-2 border-orange-700 text-orange-700 px-7 py-2 rounded-xl hover:cursor-pointer hover:bg-orange-700 hover:text-white ">Explore this temple <FaLongArrowAltRight /></button>
            </div>
        </div>
    )
}

export default TempleCard;