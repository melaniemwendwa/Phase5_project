import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">DisasterConnect</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/report">Report</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}
