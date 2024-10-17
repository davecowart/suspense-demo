import { Suspense } from "react";
import Child from "./child";

const secret = process.env.SECRET_VALUE;

const slowApiRequest = async () => {
  // pretend this was a slow API call
  await new Promise((r) => setTimeout(r, 5000));

  return { id: 123, name: "Rupert" };
};

export default function Home() {
  // note that this isn't awaited
  const dataPromise = slowApiRequest();

  return (
    <>
      <h1>This page is a server component</h1>
      <p>I can use env vars: {secret}</p>
      <Suspense fallback={<h2>Loading (this could be any component)...</h2>}>
        <Child dataPromise={dataPromise} />
      </Suspense>
    </>
  );
}
