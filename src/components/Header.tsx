import Link from 'next/link';

export default function Header() {
  return (
    <header className="header-topo">
      <h1 className="titulo-app">PokeExplorer</h1>
      <nav>
        <Link href="/" className="menu-link">Início</Link>
        <Link href="/sobre" className="menu-link">Sobre</Link>
      </nav>
    </header>
  );
}