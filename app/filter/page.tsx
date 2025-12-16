import { kpFetch, normalizeList, normalizeId } from "../lib/kp";

export default async function Filter({ searchParams }: any) {
  const genre = searchParams.genre || "";
  const page = searchParams.page || 1;

  const data = await kpFetch(
    `/api/v2.2/films?genres=${genre}&page=${page}`,
    true
  );

  const movies = normalizeList(data);

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Filterlangan filmlar</h1>
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