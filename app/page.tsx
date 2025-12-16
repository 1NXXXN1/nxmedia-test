import { kpFetch, normalizeList, normalizeId } from "./lib/kp";

export const revalidate = 3600;

export default async function Home() {
  const data = await kpFetch(
    "/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1"
  );

  const movies = normalizeList(data);

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Mashhur filmlar</h1>

      {movies.length === 0 ? (
        <p className="opacity-60">Ma’lumot topilmadi</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {movies.slice(0, 20).map((m: any) => {
            const id = normalizeId(m);
            return (
              <a key={id} href={`/movie/${id}`}>
                <img src={m.posterUrlPreview} className="rounded" />
              </a>
            );
          })}
        </div>
      )}
    </main>
  );
}