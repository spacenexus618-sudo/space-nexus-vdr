// IndexNow helper — submit updated URLs to Bing/Yandex on publish.
// Usage: import { submitIndexNow } from "@/lib/indexnow"; await submitIndexNow(["https://spacenexus.net/pricing"])
// Key file: /public/9f3a2b7c4e5d48a0b6f1c2d3e4a5b6c7d.txt (must stay publicly reachable).
// NOTE: register the same key in Bing Webmaster Tools before first submit.

const INDEXNOW_KEY = "9f3a2b7c4e5d48a0b6f1c2d3e4a5b6c7d";
const HOST = "spacenexus.net";

export async function submitIndexNow(urlList: string[]): Promise<boolean> {
  try {
    const res = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
