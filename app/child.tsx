"use client";

import { use } from "react";

export default function Child({ dataPromise }: { dataPromise: Promise<any> }) {
  const data = use(dataPromise);

  return (
    <>
      <h3>This component is a client component</h3>
      <p>This data was loaded from the server</p>
      {JSON.stringify(data)}
    </>
  );
}
