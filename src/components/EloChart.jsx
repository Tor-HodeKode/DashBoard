import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { fetchPlayer, fetchEloHistory } from "../lib/faceItApi";
import { useTranslation } from "react-i18next";
import { themes, useIsDarkMode, cap } from "../styles/globalStyle";

export default function EloChart({ nickname, themeName }) {
  const [eloData, setEloData] = useState([]);
  const [error, setError] = useState(null);
  const { t } = useTranslation(["dashboard", "other"]);
  const theme = themes[themeName];
  const isDark = useIsDarkMode();

  useEffect(() => {
    async function getElo() {
      try {
        const player = await fetchPlayer(nickname);
        const history = await fetchEloHistory(player.player_id);
        // Tilpass dette etter hvordan API-responsen faktisk ser ut!
        const chartData = (history.items || []).map((item) => ({
          name: new Date(item.started_at * 1000).toLocaleDateString(), // eller bruk item.date hvis det finnes
          elo: item.elo,
        }));
        setEloData(chartData);
      } catch (err) {
        setError(err.message);
      }
    }
    if (nickname) getElo();
  }, [nickname]);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!eloData.length) return <div>{cap(t("other:loading"))} {t("elo-history")}...</div>;

  const styles = {
    linechart: "[&_*:focus]:outline-none",
  }
  const tooltip = {
    background: isDark ? theme.tooltipBgDark : theme.tooltipBg,
    color: isDark ? theme.tooltipTextDark : theme.tooltipText,
    borderRadius: "5px",
  }
  return (
    <div className={ theme.itemGradient + " rounded-xl shadow p-4"}>
      <h2 className={ theme.titleText + " font-semibold mb-2"}>{cap(t("elo-history"))}</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={eloData} className={styles.linechart}>
          <XAxis dataKey="name" stroke="currentColor" className={theme.icon} />
          <YAxis stroke="currentColor" className={theme.icon} />
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
