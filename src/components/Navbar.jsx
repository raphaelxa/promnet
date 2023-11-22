import { NavLink } from "react-router-dom";

function Navbar() {
    return (<div className="fixed top-0 left-0 right-0">
        <header>
            <nav className="container mx-auto flex justify-end">
                <ul className="flex p-8 space-x-12 text-3xl">
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "duration-200" : "text-neutral-300 duration-200")} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "duration-200" : "text-neutral-300 duration-200")} to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "duration-200" : "text-neutral-300 duration-200")} to="/contact">Contact Us</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>)
}

export default Navbar