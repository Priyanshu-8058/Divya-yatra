import logo from "../assets/divya-yatra-logo.svg";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        ["Home", "/"],
        ["Explore Temples", "/temples"],
        ["Yatra Planner", "/planner"],
        ["Yatra Packages", "/packages"],
        ["Travel Info", "/travel"],
        ["About Us", "/about"],
    ];

    return (
        <nav className="relative flex min-h-[72px] flex-nowrap items-center justify-between gap-3 bg-white px-4 shadow-sm md:px-6">
            <img className="h-14 shrink-0 max-[1080px]:h-12" src={logo} alt="Divya Yatra Logo" />

            <ul
                id="site-navigation"
                className={`${isMenuOpen ? "flex" : "hidden"
                    } absolute left-0 top-full z-20 w-full flex-col gap-4 p-4 text-sm  min-[881px]:static min-[881px]:z-auto min-[881px]:flex min-[881px]:w-auto min-[881px]:flex-row min-[881px]:gap-6 min-[881px]:bg-transparent min-[881px]:p-0 min-[881px]:text-sm min-[1081px]:gap-6 max-[1080px]:text-xs`}
            >
                {navLinks.map(([label, path]) => (
                    <li key={path} className="shrink-0">
                        <NavLink
                            to={path}
                            end={path === "/"}
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) =>
                                `whitespace-nowrap hover:text-orange-500 ${isActive
                                    ? "underline decoration-orange-500 underline-offset-4"
                                    : ""
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className="flex shrink-0 items-center gap-3 max-[1080px]:gap-2">
                <button
                    type="button"
                    aria-label={isSearchOpen ? "Close search" : "Open search"}
                    aria-expanded={isSearchOpen}
                    aria-controls="site-search"
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    className="shrink-0"
                >
                    <FaSearch />
                </button>

                <button
                    type="button"
                    className="shrink-0 rounded border-2 border-orange-500 px-3 py-1 text-orange-500 hover:bg-orange-500 hover:text-white max-[1080px]:px-2 max-[1080px]:py-0.5 max-[1080px]:text-xs"
                >
                    Login
                </button>

                <button
                    type="button"
                    className="shrink-0 rounded border-2 border-orange-500 bg-orange-500 px-3 py-1 text-white hover:bg-white hover:text-orange-500 max-[1080px]:px-2 max-[1080px]:py-0.5 max-[1080px]:text-xs"
                >
                    Register
                </button>

                <button
                    type="button"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="site-navigation"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="hidden shrink-0 max-[880px]:inline-flex"
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {isSearchOpen && (
                <input
                    id="site-search"
                    type="search"
                    aria-label="Search temples or packages"
                    placeholder="Search temples or packages..."
                    className="absolute right-4 top-full z-30 mt-2 w-56 rounded border border-gray-300 bg-white px-3 py-2 shadow md:right-6"
                />
            )}
        </nav>
    );
}

export default NavBar;