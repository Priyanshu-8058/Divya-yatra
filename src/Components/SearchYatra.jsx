import { FaSearch } from "react-icons/fa";

function SearchYatra() {
    return (
        <>
            {/* <div className="flex gap-10 border-2 min-h-[80px] items-center max-w-6xl w-full mx-auto justify-around rounded-xl bg-white"  >
                <div className="flex flex-col justify-center border-r border-gray-300 px-6">
                   
                </div>
                <div className="flex flex-col justify-center border-r border-gray-300 px-6">
                    
                </div>
                <div className="flex flex-col justify-center border-r border-gray-300 px-6">
                    
                </div>


                <button className="flex items-center px-6"><a href="#" ><FaSearch /> Search yatras</a></button>
            </div> */}
            <div className="mx-auto flex flex-col lg:flex-row min-h-[80px] shadow-xl w-full max-w-6xl items-stretch justify-around rounded-xl bg-white">
                <div className="flex flex-1 flex-col justify-center border-b border-gray-300 lg:border-b-0 lg:border-r border-gray-300 px-6">
                     <label htmlFor="destination">Where do you want to go?</label>
                    <input type="text" id="destination" placeholder="e.g. Kedarnath, Badrinath" name="destination" />
                </div>

                <div className="flex flex-1 flex-col justify-center border-b border-gray-300 lg:border-b-0 lg:border-r border-gray-300 px-6">
                    <label htmlFor="date">Travel Date</label>
                    <input type="date" id="date" />
                </div>

                <div className="flex flex-1 flex-col justify-center border-b border-gray-300 lg:border-b-0 lg:border-r border-gray-300 px-6">
                    <label htmlFor="members">No. of travelers</label>
                    <select name="members" id="members">
                        <option value="1">1 travelers</option>
                        <option value="2">2 travelers</option>
                        <option value="3">3 travelers</option>
                        <option value="4">4 travelers</option>
                        <option value="5+">5+ travelers</option>
                    </select>
                </div>

                <button type="button" className="flex items-center gap-2 px-6 bg-orange-500 text-white hover:cursor-pointer m-3 rounded-lg hover:m-3 hover:rounded-lg hover:bg-white hover:border-orange-500 hover:text-orange-500">
                    <FaSearch /> Search yatras
                </button>
            </div>

            
        </>
    )
}

export default SearchYatra;