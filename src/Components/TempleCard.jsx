import { FaLongArrowAltRight, FaMapMarkerAlt } from "react-icons/fa";
import { TbChess } from "react-icons/tb";

function TempleCard({ title, heading, description, locations, imageUrl }) {
  return (
    <div className="mx-auto w-full max-w-[350px] min-h-[220px] overflow-hidden rounded-xl border border-gray-300 transition-transform duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={heading}
          className="h-40 w-full object-cover"
        />
        <span className="absolute bottom-3 left-3 rounded-full px-3 py-1 text-sm font-medium text-white">
          {title}
        </span>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <h2 className="flex items-center gap-2 text-xl font-bold">
          <span className="text-orange-800"><TbChess /></span>
          {heading}
        </h2>

        <p className="text-gray-700">{description}</p>

        <p className="flex items-center gap-2 text-gray-600">
          <span className="text-orange-800"><FaMapMarkerAlt /></span>
          {locations}
        </p>

        <button
          type="button"
          className="flex items-center gap-2 rounded-xl border-2 border-orange-700 px-7 py-2 text-orange-700 hover:cursor-pointer hover:bg-orange-700 hover:text-white"
        >
          Explore this temple <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
}

export default TempleCard;