function StatsCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-gray-500 text-lg">{title}</h3>

      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}

export default StatsCard;