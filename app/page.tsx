import Image from "next/image"
import Day2 from "./day-2/page"
import Day3 from "./day-3/page"


export default function Home() {
  return (
    <main className="flex min-h-screen z-10 flex-col items-center justify-between p-24">
      <Day2 />
      <Day3 />
    </main>
  );
}
