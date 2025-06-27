import React, { useEffect, useState } from "react";
import { fetchPlayer, fetchPlayerMatches } from "../lib/faceItApi";

export default function MatchHistory({ nickname, game = "cs2" }) {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);

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
  if (!matches.length) return <div>Laster matchhistorikk...</div>;

  return (
    <div className="bg-gradient-to-br from-[#232526] to-[#414345] rounded-xl shadow p-4">
      <h2 className="text-yellow-400 font-semibold mb-2">Matchhistorikk</h2>
      <table className="w-full text-yellow-100">
        <thead>
          <tr>
            <th className="text-left">Dato</th>
            <th className="text-left">Motstander</th>
            <th className="text-left">Kart</th>
            <th className="text-left">Resultat</th>
            <th className="text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, idx) => (
            <tr key={idx} className="border-t border-yellow-900">
              <td>{match.date}</td>
              <td>{match.opponent}</td>
              <td>{match.map}</td>
              <td
                className={
                  match.result === "Win" ? "text-green-400" : "text-red-400"
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
