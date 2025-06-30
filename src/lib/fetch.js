const bearerKey = process.env.BEARER_KEY;

const cache = {};

async function fetchApi(target) {
  try {
    const res = await fetch(`https://open.faceit.com/data/v4/${target}`, {
      method: "get",
      headers: new Headers({
        Authorization: `Bearer ${bearerKey}`,
      }),
    });
    if (!res.ok) {
      console.warn("Response Failed:", res.status);
    }
    const json = await res.json();
    return json;
  } catch (err) {
    console.warn("Something Broke:", err.message);
  } finally {
    console.log("Fetch Complete");
  }
}
