async function getData() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${Math.floor(
      Math.random() * 100,
    )}`,
    {
      cache: 'no-store',
    },
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Posts() {
  const data = await getData();

  return <div>{data.body}</div>;
}
