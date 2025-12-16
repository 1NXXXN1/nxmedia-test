const API_BASE =
  process.env.KP_API_BASE || "https://api.kinopoiskapi.uz";

export async function kpFetch(path: string, noCache = false) {
  const res = await fetch(API_BASE + path, {
    headers: {
      "X-API-KEY": process.env.KP_API_KEY || ""
    },
    cache: noCache ? "no-store" : "force-cache"
  });

  if (!res.ok) return null;
  return res.json();
}

export function normalizeList(data: any) {
  return data?.films ?? data?.items ?? [];
}

export function normalizeId(item: any) {
  return item?.filmId ?? item?.kinopoiskId;
}