const API_BASE = "https://open.faceit.com/data/v4";
const API_KEY = import.meta.env.VITE_BEARER_KEY;

// 1. Spillerdata
export async function fetchPlayer(nickname) {
  const res = await fetch(`${API_BASE}/players?nickname=${nickname}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  if (!res.ok) throw new Error("Kunne ikke hente spiller");
  return await res.json();
}

// 2. Lag
export async function fetchTeam(teamId) {
  const res = await fetch(`${API_BASE}/teams/${teamId}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  if (!res.ok) throw new Error("Kunne ikke hente lag");
  return await res.json();
}

// 3. Hent alle lag for en spiller
export async function fetchPlayerTeams(nickname) {
  const player = await fetchPlayer(nickname);
  if (!player.player_id) throw new Error("Fant ikke spiller-ID");
  const res = await fetch(`${API_BASE}/players/${player.player_id}/teams`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  if (!res.ok) throw new Error("Kunne ikke hente lag for spiller");
  return await res.json();
}

// 4. Matchhistorikk for spiller
export async function fetchPlayerMatches(
  playerId,
  game = "cs2",
  offset = 0,
  limit = 20
) {
  const res = await fetch(
    `${API_BASE}/players/${playerId}/history?game=${game}&offset=${offset}&limit=${limit}`,
    {
      headers: { Authorization: `Bearer ${API_KEY}` },
    }
  );
  if (!res.ok) throw new Error("Kunne ikke hente matchhistorikk");
  return await res.json();
}

// 5. Detaljer for en match
export async function fetchMatch(matchId) {
  const res = await fetch(`${API_BASE}/matches/${matchId}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  if (!res.ok) throw new Error("Kunne ikke hente matchdetaljer");
  return await res.json();
}

// 6. Turneringer for spiller
export async function fetchPlayerTournaments(playerId) {
  const res = await fetch(`${API_BASE}/players/${playerId}/tournaments`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  if (!res.ok) throw new Error("Kunne ikke hente turneringer");
  return await res.json();
}

// 7. Spill (games)
export async function fetchGames() {
  const res = await fetch(`${API_BASE}/games`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  if (!res.ok) throw new Error("Kunne ikke hente spill");
  return await res.json();
}

// 8. Hubs
export async function fetchHub(hubId) {
  const res = await fetch(`${API_BASE}/hubs/${hubId}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  if (!res.ok) throw new Error("Kunne ikke hente hub");
  return await res.json();
}

// 9. Ladders
export async function fetchLadder(ladderId) {
  const res = await fetch(`${API_BASE}/ladders/${ladderId}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  if (!res.ok) throw new Error("Kunne ikke hente ladder");
  return await res.json();
}
