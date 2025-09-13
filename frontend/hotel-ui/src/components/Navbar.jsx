import { Link } from "react-router-dom";

export default function Navbar() {
    const nav = {
        background: "#0d6efd",
        color: "white",
        padding: "12px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    };
    const links = { display: "flex", gap: "14px" };

    return (
        <nav style={nav}>
            <strong>HotelApp</strong>
            <div style={links}>
                <Link to="/" style={{ color: "white" }}>Home</Link>
                <Link to="/hotels" style={{ color: "white" }}>Hotels</Link>
                <Link to="/booking" style={{ color: "white" }}>Booking</Link>
                <Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link>
                <Link to="/login" style={{ color: "white" }}>Login</Link>
            </div>
        </nav>
    );
}
