const GITHUB_API = "https://api.github.com";

function ghHeaders() {
  return {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

function ghConfig() {
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || "main";
  const path = "data/vehicles.json";
  if (!owner || !repo || !process.env.GITHUB_TOKEN) {
    throw new Error("Missing GITHUB_TOKEN / GITHUB_OWNER / GITHUB_REPO environment variables");
  }
  return { owner, repo, branch, path };
}

// Reads the current data/vehicles.json straight from the GitHub repo
// (not from the local build), so the dashboard always edits the live
// source of truth. Returns the parsed array plus the file's git "sha",
// which GitHub requires to accept the next write (optimistic locking).
export async function getVehiclesFile() {
  const { owner, repo, branch, path } = ghConfig();
  const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/contents/${path}?ref=${branch}`, {
    headers: ghHeaders(),
    cache: "no-store",
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub read failed (${res.status}): ${body}`);
  }
  const json = await res.json();
  const content = Buffer.from(json.content, "base64").toString("utf-8");
  return { vehicles: JSON.parse(content), sha: json.sha };
}

// Writes the full vehicles array back as a new commit on the repo. This
// triggers a normal Vercel deployment (same as any other GitHub push),
// which is why changes take ~30-60s to appear on the live site.
export async function saveVehiclesFile(vehicles, sha, message) {
  const { owner, repo, branch, path } = ghConfig();
  const content = Buffer.from(JSON.stringify(vehicles, null, 2) + "\n", "utf-8").toString("base64");
  const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/contents/${path}`, {
    method: "PUT",
    headers: { ...ghHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify({ message, content, sha, branch }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub write failed (${res.status}): ${body}`);
  }
  return res.json();
}
