export const revalidate = 3600;

export default async function Home() {
  const res = await fetch(
    `${process.env.KP_API_BASE}/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1`,
    {
      headers: {
        "X-API-KEY": process.env.KP_API_KEY!
      }
    }
  );
  const data = await res.json();

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Mashhur filmlar</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {data.films.slice(0,20).map((m:any)=>(
          <a key={m.filmId} href={`/movie/${m.filmId}`}>
            <img src={m.posterUrlPreview} className="rounded"/>
          </a>
        ))}
      </div>
    </main>
  );
}