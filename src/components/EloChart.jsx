import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTranslation } from "react-i18next";

const dummyEloData = [
  { name: "01.06", elo: 1800 },
  { name: "05.06", elo: 1820 },
  { name: "10.06", elo: 1850 },
  { name: "15.06", elo: 1875 },
];

export default function EloChart() {
  const { t } = useTranslation("dashboard");
  return (
    <div className="bg-gradient-to-br from-[#232526] to-[#414345] rounded-xl shadow p-4">
      <h2 className="text-yellow-400 font-semibold mb-2">{t("elo-history")}</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={dummyEloData}>
          <XAxis dataKey="name" stroke="#FFD700" />
          <YAxis stroke="#FFD700" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="elo"
            stroke="#FFD700"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
