const dummyMatches = [
  { date: "15.06", opponent: "Team Alpha", map: "Mirage", result: "Win", score: "16-10" },
  { date: "13.06", opponent: "Team Bravo", map: "Inferno", result: "Loss", score: "12-16" },
  { date: "10.06", opponent: "Team Delta", map: "Nuke", result: "Win", score: "16-8" },
];

export default function MatchHistory() {
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
          {dummyMatches.map((match, idx) => (
            <tr key={idx} className="border-t border-yellow-900">
              <td>{match.date}</td>
              <td>{match.opponent}</td>
              <td>{match.map}</td>
              <td className={match.result === "Win" ? "text-green-400" : "text-red-400"}>
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