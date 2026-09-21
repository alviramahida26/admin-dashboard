function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-5">
      <h1 className="text-2xl font-bold mb-10">Dashboard</h1>

      <ul className="space-y-4">
        <li className="hover:text-blue-400 cursor-pointer">Home</li>
        <li className="hover:text-blue-400 cursor-pointer">Analytics</li>
        <li className="hover:text-blue-400 cursor-pointer">Reports</li>
        <li className="hover:text-blue-400 cursor-pointer">Users</li>
        <li className="hover:text-blue-400 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;