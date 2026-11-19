import logo from "../assets/divya-yatra-logo.svg";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    return (
        <>
            <nav className="relative flex justify-between items-center px-4 bg-white h-18 shadow-sm md:px-6">
                <img className="h-14" src={logo} alt="Divya Yatra Logo" />


                <ul className="flex gap-6 text-sm ">

                    <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
                    <li><Link to="/temples" className="hover:text-orange-500">Explore Temples</Link></li>
                    <li><Link to="/planner" className="hover:text-orange-500">Yatra Planner</Link></li>
                    <li><Link to="/packages" className="hover:text-orange-500">Yatra Packages</Link></li>
                    <li><Link to="/travel" className="hover:text-orange-500">Travel Info</Link></li>
                    <li><Link to="/about" className="hover:text-orange-500">About Us</Link></li>
                </ul>

                <div className="flex gap-4 items-center">
                    <button type="button" aria-label="Search" onClick={() => setIsSearchOpen(!isSearchOpen)}><FaSearch /></button>
                    {isSearchOpen && (
                        <input
                            type="search"
                            placeholder="Search temples or packages..."
                            className="w-56 rounded border border-gray-300 px-3 py-0.5"
                        />
                    )}
                    <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-0.5 px-3 rounded hover:cursor-pointer">Login</button>
                    <button className="border-2 bg-orange-500 text-white hover:border-2 hover:border-orange-500 hover:text-orange-500 hover:bg-white p-0.5 px-3 rounded hover:cursor-pointer">Register</button>
                </div>
            </nav>
        </>
    )
}

export default NavBar;