import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AnalyticsChart() {

  const data = [
    { month: "Jan", users: 400 },
    { month: "Feb", users: 700 },
    { month: "Mar", users: 500 },
    { month: "Apr", users: 900 },
    { month: "May", users: 650 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">

      <h2 className="text-2xl font-bold mb-6">
        User Analytics
      </h2>

      <div className="w-full h-80">

        <ResponsiveContainer width="100%" height="100%">
          
          <BarChart data={data}>

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="users" fill="#3b82f6" radius={[10, 10, 0, 0]} />

          </BarChart>

        </ResponsiveContainer>

      </div>
    </div>
  );
}

export default AnalyticsChart;