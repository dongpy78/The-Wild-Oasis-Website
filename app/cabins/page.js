import Counter from "@/app/_components/Counter";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // useState(23);

  // console.log(data);
  return (
    <div>
      <h1>Cabins page</h1>

      <Counter users={data} />
    </div>
  );
}
