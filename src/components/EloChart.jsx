import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTranslation } from "react-i18next";
import { themes } from "@/styles/globalStyle";

const dummyEloData = [
  { name: "01.06", elo: 1800 },
  { name: "05.06", elo: 1820 },
  { name: "10.06", elo: 1850 },
  { name: "15.06", elo: 1875 },
];

export default function EloChart({ themeName }) {
  const { t } = useTranslation("dashboard");
  const theme = themes[themeName];
  return (
    <div className={ theme.gradient + " rounded-xl shadow p-4"}>
      <h2 className={ theme.titleText + " font-semibold mb-2"}>{t("elo-history")}</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={dummyEloData} className={"text-black [&_*:focus]:outline-none"}>
          <XAxis dataKey="name" stroke="currentColor" className={theme.icon}/>
          <YAxis stroke="currentColor" className={theme.icon}/>
          <Tooltip/>
          <Line
            type="monotone"
            dataKey="elo"
            stroke="currentColor"
            strokeWidth={3}
            className={theme.icon}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
