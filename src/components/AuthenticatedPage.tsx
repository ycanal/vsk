import { Suspense } from "react";
import { Link, Outlet } from "react-router";

export default function AuthenticatedPage() {
    return (
        <main>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Logout</Link></li>
                    </ul>
                </nav>
            </header>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main>
    )
}
