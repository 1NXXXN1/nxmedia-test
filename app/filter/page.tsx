export default async function Filter({ searchParams }: any) {
  const genre = searchParams.genre || "";
  const page = searchParams.page || 1;

  const res = await fetch(
    `${process.env.KP_API_BASE}/api/v2.2/films?genres=${genre}&page=${page}`,
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
      <h1 className="text-xl mb-4">Filterlangan filmlar</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {data.items.map((m:any)=>(
          <a key={m.kinopoiskId} href={`/movie/${m.kinopoiskId}`}>
            <img src={m.posterUrlPreview} className="rounded"/>
          </a>
        ))}
      </div>
    </div>
  );
}