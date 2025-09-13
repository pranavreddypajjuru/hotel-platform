import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

export default function App() {
    const layout = { minHeight: "100vh", display: "flex", flexDirection: "column" };
    const main = { flex: 1, padding: "16px" };
    const footer = { background: "#f3f3f3", textAlign: "center", padding: "12px" };

    return (
        <div style={layout}>
            <Navbar />
            <main style={main}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hotels" element={<Hotels />} />
                    <Route path="/hotels/:id" element={<HotelDetails />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>
            <footer style={footer}>© 2025 HotelApp</footer>
        </div>
    );
}
