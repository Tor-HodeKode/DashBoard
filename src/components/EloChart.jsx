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

export default function EloChart({ nickname }) {
  const [eloData, setEloData] = useState([]);
  const [error, setError] = useState(null);

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
  if (!eloData.length) return <div>Laster ELO-historikk...</div>;

  return (
    <div className="bg-gradient-to-br from-[#232526] to-[#414345] rounded-xl shadow p-4">
      <h2 className="text-yellow-400 font-semibold mb-2">Elo-historikk</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={eloData}>
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
