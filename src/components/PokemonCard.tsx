import Link from 'next/link';

export default function PokemonCard({ nome, imagem }) {
  return (
    <Link href={"/pokemon/" + nome} className="card-link">
      <div className="cartao">
        <img src={imagem} alt={nome} className="foto-pokemon" />
        <p className="nome-pokemon">{nome}</p>

       
        <div className="botao-detalhes">Detalhes</div>
      </div>
    </Link>
  );
}