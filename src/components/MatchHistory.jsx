import { useTranslation } from "react-i18next";

export default function MatchHistory() {
  const { t } = useTranslation("dashboard");
  const dummyMatches = [
    { date: "15.06", opponent: "Team Alpha", map: "Mirage", result: t("win"), score: "16-10" },
    { date: "13.06", opponent: "Team Bravo", map: "Inferno", result: t("loss"), score: "12-16" },
    { date: "10.06", opponent: "Team Delta", map: "Nuke", result: t("win"), score: "16-8" },
  ];
  return (
    <div className="bg-gradient-to-br from-[#232526] to-[#414345] rounded-xl shadow p-4">
      <h2 className="text-yellow-400 font-semibold mb-2">{t("matchHistory")}</h2>
      <table className="w-full text-yellow-100">
        <thead>
          <tr>
            <th className="text-left">{t("date")}</th>
            <th className="text-left">{t("opponent")}</th>
            <th className="text-left">{t("map")}</th>
            <th className="text-left">{t("result")}</th>
            <th className="text-left">{t("score")}</th>
          </tr>
        </thead>
        <tbody>
          {dummyMatches.map((match, idx) => (
            <tr key={idx} className="border-t border-yellow-900">
              <td>{match.date}</td>
              <td>{match.opponent}</td>
              <td>{match.map}</td>
              <td className={match.result === t("win") ? "text-green-400" : "text-red-400"}>
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