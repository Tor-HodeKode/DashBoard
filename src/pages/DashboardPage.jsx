import React from "react";
import { useTranslation } from "react-i18next";

import StatCard from "../components/StatCard";
import EloChart from "../components/EloChart";
import MatchHistory from "../components/MatchHistory";

const DashboardPage = () => {
  const { t } = useTranslation("dashboard");
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-8">
        <StatCard themeName={"blueYellowBlack"} title="Elo" value={1875} icon="⭐" />
        <StatCard themeName={"blueYellowBlack"} title={t("winRate")} value="57%" icon="🏆" />
        <StatCard themeName={"blueYellowBlack"} title="K/D" value="1.23" icon="🎯" />
        <StatCard themeName={"blueYellowBlack"} title="HS %" value="48%" icon="💥" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EloChart themeName={"blueYellowBlack"}/>
        <MatchHistory themeName={"blueYellowBlack"}/>
      </div>
    </div>
  );
};

export default DashboardPage;