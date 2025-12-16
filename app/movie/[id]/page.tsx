export default async function Movie({ params }: any) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_SITE_URL + "/api/kp?path=/api/v2.2/films/" + params.id,
    { cache: "no-store" }
  );
  const data = await res.json();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">{data.nameRu}</h1>
      <iframe
        src={`https://api.linktodo.ws/embed/kp/${params.id}?host=kinobd.net`}
        className="w-full aspect-video rounded-xl"
        allowFullScreen
      />
      <p className="opacity-70">{data.description}</p>
    </div>
  );
}