import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
            <h1 className="text-5xl font-bold">404</h1>
            <p className="mt-2 text-gray-600">The page you’re looking for doesn’t exist.</p>
            <Link
                to="/"
                className="mt-6 inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
                Go Home
            </Link>
        </div>
    );
}
