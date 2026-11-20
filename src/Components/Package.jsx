import { FaStarOfDavid } from "react-icons/fa";
import { SiGumtree } from "react-icons/si";
import { IoMdStarOutline } from "react-icons/io";
import { GiRotaryPhone } from "react-icons/gi";
import PackageCard from "./PackageCard";
import CharDhamYatra from "../assets/CharDhamYatra.avif";
import Kashi from "../assets/Kashi.avif";
import Haridwar from "../assets/Haridwar.avif";

function Package() {

    return (
        <>
            <div className="bg-pink-50 min-h-[400px] flex flex-col lg:flex-row items-center gap-8">
                <div className="w-full max-w-[500px] bg-pink-100 rounded-xl min-h-[290px] p-5 m-auto">
                    <h1 className="text-xl font-bold mb-4 font-serif" >Why travel with Divya Yatra?</h1>

                    <ul className="grid grid-cols-2 gap-4">
                        <li className="flex flex-row items-center gap-2">
                            <div className="bg-white w-12 h-9 rounded-full flex items-center justify-center text-orange-700">
                                <FaStarOfDavid />
                            </div>
                            <div>
                                <h2 className="text-sm font-bold">Local Knowledge</h2>
                                <p className="text-xs text-gray-500">Guidance from people who know the route</p>
                            </div>
                        </li>
                        <li className="flex flex-row items-center gap-2">
                            <div className="bg-white w-12 h-9 rounded-full flex items-center justify-center text-orange-700">
                                <SiGumtree />
                            </div>
                            <div>
                                <h2 className="text-sm font-bold">Safety comes first</h2>
                                <p className="text-xs text-gray-500">Clear plans and considered support</p>
                            </div>
                        </li>
                        <li className="flex flex-row items-center gap-2">
                            <div className="bg-white w-12 h-9 rounded-full flex items-center justify-center text-orange-700">
                                <IoMdStarOutline />
                            </div>
                            <div>
                                <h2 className="text-sm font-bold">Made for your pace</h2>
                                <p className="text-xs text-gray-500">Options shaped around your needs</p>
                            </div>
                        </li>
                        <li className="flex flex-row items-center gap-2">
                            <div className="bg-white w-12 h-9 rounded-full flex items-center justify-center text-orange-700">
                                <GiRotaryPhone />
                            </div>
                            <div>
                                <h2 className="text-sm font-bold">Here when you need us</h2>
                                <p className="text-xs text-gray-500">Friendly help throughout your yatra</p>
                            </div>
                        </li>
                    </ul>

                </div>
                <div className="w-full lg:flex-1 lg:min-w-0 min-h-[300px] m-auto rounded-xl bg-pink-50">
                    <h1 className="text-2xl font-semibold font-serif">Popular yatra packages</h1>
                    <div className="flex flex-wrap justify-center gap-4 mt-5">
                        <PackageCard imageUrl={CharDhamYatra} title="11 days" heading="Char Dham Yatra" locations="⌖ Uttarakhand · 4 sacred shrines" ticket="3,200" />
                        <PackageCard imageUrl={Kashi} title="3 days" heading="Kashi Vishwanath & Varanasi" locations="⌖ Varanasi · Uttar Pradesh" ticket=" 8,999" />
                        <PackageCard imageUrl={Haridwar} title="4 days" heading="Haridwar – Rishikesh Retreat" locations="⌖ Uttarakhand · Ganga valley" ticket="10,999 " />
                    </div>
                </div>


            </div>
            <div className="flex min-h-[177px] flex-col items-center justify-center bg-[#213343] px-6 py-10 text-center">
                <h2 className="max-w-2xl font-serif text-xl font-semibold italic leading-snug md:text-2xl">
                    “The journey changes the way you see the world, and the way you see yourself.”
                </h2>

                <p className="mt-4 text-[10px] tracking-[0.2em] text-orange-400">
                    TAKE THE PATH THAT CALLS TO YOU
                </p>
            </div>
        </>

    )
}

export default Package;