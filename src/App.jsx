import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatsCard from "./components/StatsCard";
import AnalyticsChart from "./components/AnalyticsChart";
import DataTable from "./components/DataTable";

function App() {

  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="flex bg-gray-100 min-h-screen">

      {showSidebar && <Sidebar />}

      <div className="flex-1 p-6">

        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="bg-slate-900 text-white px-4 py-2 rounded-lg mb-4"
        >
          {showSidebar ? "Hide Sidebar" : "Show Sidebar"}
        </button>

        <Navbar />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

          <StatsCard title="Total Users" value="1,245" />

          <StatsCard title="Revenue" value="$8,420" />

          <StatsCard title="Orders" value="320" />

        </div>

        <AnalyticsChart />

        <DataTable />

      </div>

    </div>
  );
}

export default App;