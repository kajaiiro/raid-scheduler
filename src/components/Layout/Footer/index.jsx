import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <Link to="/" class="nav-link px-2 text-muted">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/event" class="nav-link px-2 text-muted">
                            Calendar
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" class="nav-link px-2 text-muted">
                            Log In
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" class="nav-link px-2 text-muted">
                            Register
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" class="nav-link px-2 text-muted">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/privacypolicy"
                            className="nav-link px-2 text-muted"
                        >
                            Privacy Policy
                        </Link>
                    </li>
                </ul>
                <p className="text-center text-muted">&copy; kajaiiro</p>
            </footer>
        </div>
    );
}
