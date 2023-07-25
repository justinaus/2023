import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul>
        <Link href={`/`}>Home</Link>
        <Link href={`/posts`}>Posts</Link>
        <Link href={`/photos`}>Photos</Link>
      </ul>
    </nav>
  );
}
