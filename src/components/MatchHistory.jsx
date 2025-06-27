import React, { useEffect, useState } from "react";
import { fetchPlayer, fetchPlayerMatches } from "../lib/faceItApi";
import { useTranslation } from "react-i18next";
import { cap, themes } from "../styles/globalStyle";

export default function MatchHistory({ nickname, game = "cs2", themeName }) {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);
  const { t } = useTranslation(["dashboard", "other"]);
  const theme = themes[themeName];

  useEffect(() => {
    async function getMatches() {
      try {
        const player = await fetchPlayer(nickname);
        const data = await fetchPlayerMatches(player.player_id, game, 0, 10);
        // Tilpass etter faktisk API-respons!
        const matchList = (data.items || []).map((item) => ({
          date: new Date(item.started_at * 1000).toLocaleDateString(),
          opponent: item.teams?.faction2?.nickname || "N/A",
          map: item.csgo_map || item.map || "N/A",
          result: item.results?.winner === "faction1" ? "Win" : "Loss",
          score: item.results?.score || "N/A",
        }));
        setMatches(matchList);
      } catch (err) {
        setError(err.message);
      }
    }
    if (nickname) getMatches();
  }, [nickname, game]);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!matches.length) return <div>{cap(t("loading"))} {t("matchHistory")}...</div>;

  return (
    <div className={ theme.itemGradient + " rounded-xl shadow p-4"}>
      <h2 className={ theme.titleText + " font-semibold mb-2"}>{cap(t("matchHistory"))}</h2>
      <table className={"w-full" + theme.mainText}>
        <thead>
          <tr>
            <th className="text-left">{cap(t("date"))}</th>
            <th className="text-left">{cap(t("opponent"))}</th>
            <th className="text-left">{cap(t("map"))}</th>
            <th className="text-left">{cap(t("result"))}</th>
            <th className="text-left">{cap(t("score"))}</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, idx) => (
            <tr key={idx} className={"border-t" + theme.border}>
              <td>{match.date}</td>
              <td>{match.opponent}</td>
              <td>{match.map}</td>
              <td
                className={
                  match.result === cap(t("win")) ? "text-green-400" : "text-red-400"
                }
              >
                {match.result}
              </td>
              <td>{match.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
