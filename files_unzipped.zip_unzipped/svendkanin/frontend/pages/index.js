import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>SvendKanin – Rabbit Care Tracker</h1>
      <nav>
        <Link href="/rabbit">Rabbit Profile</Link> | 
        <Link href="/journal">Journal / Tasks</Link>
      </nav>
      <div>
        Welcome to your smart rabbit diary and care management app!
        <ul>
          <li>Track daily care tasks (medication, feeding, etc.)</li>
          <li>Journal health and behavior</li>
          <li>Get proactive feedback powered by Gemini AI</li>
        </ul>
      </div>
    </div>
  );
}