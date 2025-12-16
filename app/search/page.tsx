export default async function Search({ searchParams }: any) {
  const q = searchParams.q;
  const page = searchParams.page || 1;

  if (!q) return <div className="p-6">Qidiruv so‘zi kiriting</div>;

  const res = await fetch(
    `${process.env.KP_API_BASE}/api/v2.1/films/search-by-keyword?keyword=${q}&page=${page}`,
    {
      headers: {
        "X-API-KEY": process.env.KP_API_KEY!
      },
      cache: "no-store"
    }
  );
  const data = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Qidiruv: {q}</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {data.films.map((m:any)=>(
          <a key={m.filmId} href={`/movie/${m.filmId}`}>
            <img src={m.posterUrlPreview} className="rounded"/>
          </a>
        ))}
      </div>
    </div>
  );
}