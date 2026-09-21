function Navbar() {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
      <h2 className="text-2xl font-semibold">Admin Dashboard</h2>

      <input
        type="text"
        placeholder="Search..."
        className="border px-4 py-2 rounded-lg outline-none"
      />
    </div>
  );
}

export default Navbar;