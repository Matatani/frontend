import type { Heading } from "@/types/Heading";

async function getHeading() : Promise<Heading | null> {
  try {
    const res = await fetch("http://localhost:8080/heading")

    if (!res.ok) {
      return null
    }

    return res.json()

  } catch (error) {
    console.log(error)
    return null
  }
}

export default async function Home() {
  const heading = await getHeading()

  return (
      <div>
        {heading ? (<h1>{heading.text}</h1>) : (<h1>{"Can't get the heading"}</h1>)}
      </div>
  );
}
