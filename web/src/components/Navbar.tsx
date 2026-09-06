import { Link } from "react-router"

export default function Navbar() {
    return (
        <header className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link 
                    to="/"
                    className="btn btn-ghost text-xl"
                >
                    Asset Manager Web
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Assets</Link></li>
                </ul>
            </div>
        </header>
    )
}