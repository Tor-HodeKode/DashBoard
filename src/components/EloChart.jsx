import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTranslation } from "react-i18next";
import { themes, useIsDarkMode } from "@/styles/globalStyle";

const dummyEloData = [
  { name: "01.06", elo: 1800 },
  { name: "05.06", elo: 1820 },
  { name: "10.06", elo: 1850 },
  { name: "15.06", elo: 1875 },
];

export default function EloChart({ themeName }) {
  const { t } = useTranslation("dashboard");
  const theme = themes[themeName];
  const isDark = useIsDarkMode();

  const styles = {
    linechart: "[&_*:focus]:outline-none",
  }
  const tooltip = {
    background: isDark ? theme.tooltipBgDark : theme.tooltipBg,
    color: isDark ? theme.tooltipTextDark : theme.tooltipText,
    borderRadius: "5px",
  }

  return (
    <div className={ theme.gradient + " rounded-xl shadow p-4"}>
      <h2 className={ theme.titleText + " font-semibold mb-2"}>{t("elo-history")}</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={dummyEloData} className={styles.linechart}>
          <XAxis dataKey="name" stroke="currentColor" className={theme.icon}/>
          <YAxis stroke="currentColor" className={theme.icon}/>
          <Tooltip contentStyle={tooltip}/>
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
