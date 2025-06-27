import React, { useEffect, useState } from "react";
import { fetchTeam, fetchPlayer } from "../lib/faceItApi";
import StatCard from "./StatCard";

export default function FaceitStats() {
  const [nickname, setNickname] = useState("");
  const [player, setPlayer] = useState(null);
  const [game, setGame] = useState("");
  const [teamId, setTeamId] = useState("");
  const [players, setPlayers] = useState([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState("");
  const [selectedPlayerStats, setSelectedPlayerStats] = useState(null);
  const [error, setError] = useState(null);

  // Hent spillerdata når nickname endres
  useEffect(() => {
    if (!nickname) return;
    fetchPlayer(nickname)
      .then((data) => {
        setPlayer(data);
        // Sett første spill som default hvis finnes
        const availableGames = Object.keys(data.games || {});
        setGame(availableGames[0] || "");
      })
      .catch((err) => setError(err.message));
  }, [nickname]);

  // Hent lagdata når teamId endres
  useEffect(() => {
    if (!teamId) return;
    fetchTeam(teamId)
      .then((data) => {
        setPlayers(data.members || []);
        setSelectedPlayerId("");
        setSelectedPlayerStats(null);
      })
      .catch((err) => setError(err.message));
  }, [teamId]);

  // Hent stats for valgt spiller
  useEffect(() => {
    if (!selectedPlayerId) {
      setSelectedPlayerStats(null);
      return;
    }
    const playerObj = players.find((p) => p.player_id === selectedPlayerId);
    if (!playerObj) return;
    fetchPlayer(playerObj.nickname)
      .then((data) => setSelectedPlayerStats(data))
      .catch((err) => setError(err.message));
  }, [selectedPlayerId, players]);

  // Dynamisk spill-liste fra spillerdata
  const availableGames = player ? Object.keys(player.games || {}) : [];
  const gameLabels = {
    cs2: "CS2",
    valorant: "Valorant",
    lol: "League of Legends",
    // legg til flere hvis ønskelig
  };

  return (
    <div className="mx-auto mt-16 max-w-3xl flex flex-col items-center">
      {/* Søkefelt for spiller */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Faceit-nick"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="p-2 rounded border w-48"
        />
      </div>

      {error && <div className="text-red-500 mb-6">{error}</div>}

      {/* Vis spillerdata */}
      {player && (
        <div className="flex flex-col items-center mb-8">
          <img
            src={player.avatar}
            alt={player.nickname}
            className="w-24 h-24 rounded-full mb-2"
          />
          <div className="text-lg font-bold text-yellow-400">
            {player.nickname}
          </div>
          <div className="text-gray-400 text-sm mb-1">
            Land: {player.country} | Språk: {player.settings?.language}
          </div>
          <div className="text-gray-400 text-sm mb-1">
            Registrert:{" "}
            {player.created_at
              ? new Date(player.created_at * 1000).toLocaleDateString()
              : "?"}
          </div>
          <div className="text-gray-400 text-sm mb-1">
            Level: {player.games?.[game]?.skill_level || "-"} | ELO:{" "}
            {player.elo || "-"}
          </div>
        </div>
      )}

      {/* Spillvalg */}
      {availableGames.length > 0 && (
        <div className="flex flex-row gap-4 mb-6">
          <select
            value={game}
            onChange={(e) => setGame(e.target.value)}
            className="p-2 rounded border w-48"
          >
            {availableGames.map((g) => (
              <option key={g} value={g}>
                {gameLabels[g] || g}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Lagvalg og spillervalg kan implementeres her hvis du ønsker å hente lag for brukeren */}

      {/* Vis stats for valgt spiller (hvis du har valgt en spiller fra lag) */}
      {selectedPlayerStats && (
        <div className="flex flex-wrap gap-6 justify-center items-center bg-gradient-to-r from-gray-800 to-gray-900 py-8 rounded-xl scale-90 mt-8">
          {selectedPlayerStats.elo && (
            <StatCard title="ELO" value={selectedPlayerStats.elo} icon="📈" />
          )}
          {selectedPlayerStats.games?.[game]?.skill_level && (
            <StatCard
              title="Level"
              value={selectedPlayerStats.games[game].skill_level}
              icon="🎯"
            />
          )}
          {selectedPlayerStats.games?.[game]?.lifetime?.Wins && (
            <StatCard
              title="Wins"
              value={selectedPlayerStats.games[game].lifetime.Wins}
              icon="🏆"
            />
          )}
          {selectedPlayerStats.games?.[game]?.lifetime?.Matches && (
            <StatCard
              title="Matches"
              value={selectedPlayerStats.games[game].lifetime.Matches}
              icon="🎮"
            />
          )}
        </div>
      )}
    </div>
  );
}
