import { kpFetch, normalizeList, normalizeId } from "../lib/kp";

export default async function Search({ searchParams }: any) {
  const q = searchParams.q;
  const page = searchParams.page || 1;

  if (!q) return <div className="p-6">Qidiruv so‘zi kiriting</div>;

  const data = await kpFetch(
    `/api/v2.1/films/search-by-keyword?keyword=${q}&page=${page}`,
    true
  );

  const movies = normalizeList(data);

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Qidiruv: {q}</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {movies.map((m: any) => {
          const id = normalizeId(m);
          return (
            <a key={id} href={`/movie/${id}`}>
              <img src={m.posterUrlPreview} className="rounded" />
            </a>
          );
        })}
      </div>
    </div>
  );
}