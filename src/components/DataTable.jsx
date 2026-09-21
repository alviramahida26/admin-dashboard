import { useState } from "react";

function DataTable() {

  const users = [
    { id: 1, name: "Alvira", role: "Admin", status: "Active" },
    { id: 2, name: "Samir", role: "Editor", status: "Pending" },
    { id: 3, name: "Almas", role: "User", status: "Active" },
    { id: 4, name: "Aziza", role: "User", status: "Inactive" },
  ];

  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortAsc
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">

        <h2 className="text-2xl font-bold">
          Users Table
        </h2>

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Search user..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded-lg outline-none"
          />

          <button
            onClick={() => setSortAsc(!sortAsc)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            Sort {sortAsc ? "Z-A" : "A-Z"}
          </button>

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>

            <tr className="bg-gray-100">

              <th className="text-left p-3">ID</th>

              <th className="text-left p-3">Name</th>

              <th className="text-left p-3">Role</th>

              <th className="text-left p-3">Status</th>

            </tr>

          </thead>

          <tbody>

            {filteredUsers.map((user) => (

              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 transition"
              >

                <td className="p-3">{user.id}</td>

                <td className="p-3">{user.name}</td>

                <td className="p-3">{user.role}</td>

                <td className="p-3">

                  <span
                    className={`px-3 py-1 rounded-full text-sm text-white
                      ${
                        user.status === "Active"
                          ? "bg-green-500"
                          : user.status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                  >
                    {user.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default DataTable;