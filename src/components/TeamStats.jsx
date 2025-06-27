import React, { useEffect, useState } from "react";
import { fetchTeam, fetchPlayer, fetchPlayerTeams } from "../lib/faceItApi";
import StatCard from "./StatCard";

const gameLabels = {
  cs2: "CS2",
  valorant: "Valorant",
  lol: "League of Legends",
  // legg til flere hvis ønskelig
};

export default function FaceitStats() {
  const [game, setGame] = useState("cs2");
  const [nickname, setNickname] = useState("");
  const [teamsList, setTeamsList] = useState([]);
  const [teamId, setTeamId] = useState("");
  const [players, setPlayers] = useState([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState("");
  const [selectedPlayerStats, setSelectedPlayerStats] = useState(null);
  const [error, setError] = useState(null);

  // Hent lag for bruker
  const handleFetchTeams = async () => {
    try {
      const data = await fetchPlayerTeams(nickname);
      setTeamsList(data.items);
      setTeamId("");
      setPlayers([]);
      setSelectedPlayerId("");
      setSelectedPlayerStats(null);
    } catch (err) {
      setError(err.message);
    }
  };

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
    const player = players.find((p) => p.player_id === selectedPlayerId);
    if (!player) return;
    fetchPlayer(player.nickname)
      .then((data) => setSelectedPlayerStats(data))
      .catch((err) => setError(err.message));
  }, [selectedPlayerId, players]);

  const games = [
    { value: "cs2", label: "CS2" },
    { value: "valorant", label: "Valorant" },
    { value: "lol", label: "League of Legends" },
  ];

  const availableGames = selectedPlayerStats
    ? Object.keys(selectedPlayerStats.games || {})
    : [];

  return (
    <div className="mx-auto mt-16 max-w-3xl flex flex-col items-center">
      {/* Søkefelt og valg */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Faceit-nick"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="p-2 rounded border w-48"
        />
        <button
          onClick={handleFetchTeams}
          className="p-2 bg-yellow-500 rounded text-black w-32"
        >
          Hent lag
        </button>
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
        <select
          value={teamId}
          onChange={(e) => setTeamId(e.target.value)}
          className="p-2 rounded border w-48"
        >
          <option value="">Velg lag</option>
          {teamsList.map((team) => (
            <option key={team.team_id} value={team.team_id}>
              {team.name}
            </option>
          ))}
        </select>
        {players.length > 0 && (
          <select
            value={selectedPlayerId}
            onChange={(e) => setSelectedPlayerId(e.target.value)}
            className="p-2 rounded border w-48"
          >
            <option value="">Velg spiller</option>
            {players.map((player) => (
              <option key={player.player_id} value={player.player_id}>
                {player.nickname}
              </option>
            ))}
          </select>
        )}
      </div>

      {error && <div className="text-red-500 mb-6">{error}</div>}

      {/* Vis stats for valgt spiller */}
      {selectedPlayerStats && (
        <div className="flex flex-wrap gap-6 justify-center items-center bg-gradient-to-r from-gray-800 to-gray-900 py-8 rounded-xl scale-90 mt-8">
          {selectedPlayerStats.elo && (
            <StatCard title="ELO" value={selectedPlayerStats.elo} icon="📈" />
          )}
          {selectedPlayerStats.games?.cs2?.skill_level && (
            <StatCard
              title="Level"
              value={selectedPlayerStats.games.cs2.skill_level}
              icon="🎯"
            />
          )}
          {selectedPlayerStats.games?.cs2?.lifetime?.Wins && (
            <StatCard
              title="Wins"
              value={selectedPlayerStats.games.cs2.lifetime.Wins}
              icon="🏆"
            />
          )}
          {selectedPlayerStats.games?.cs2?.lifetime?.Matches && (
            <StatCard
              title="Matches"
              value={selectedPlayerStats.games.cs2.lifetime.Matches}
              icon="🎮"
            />
          )}
        </div>
      )}
    </div>
  );
}
