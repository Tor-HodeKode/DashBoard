import React from "react";
import StatCard from "../components/StatCard";
import EloChart from "../components/EloChart";
import MatchHistory from "../components/MatchHistory";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-8">
        <StatCard title="Elo" value={1875} icon="⭐" />
        <StatCard title="Winrate" value="57%" icon="🏆" />
        <StatCard title="K/D" value="1.23" icon="🎯" />
        <StatCard title="HS %" value="48%" icon="💥" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EloChart />
        <MatchHistory />
      </div>
    </div>
  );
};

export default DashboardPage;