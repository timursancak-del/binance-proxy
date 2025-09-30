import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: "Internal Server Error", details: err.message });
  }
}
