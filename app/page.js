import Link from 'next/link';
export default function Page() {
  const weeks = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  return ( 
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      {weeks.map((week) => (
        <div key={week}>
          <Link href={`week-${week}`}> 
            Week {week} Assignment
          </Link>
        </div>
      ))}
    </main>
  );
}