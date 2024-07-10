import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Page() {
  return (
    <div>
      <Navigation />

      <h1>Hello Next JS</h1>
      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
}
