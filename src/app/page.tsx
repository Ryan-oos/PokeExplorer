import PokemonCard from "../components/PokemonCard";

export default async function Page() {
  const resposta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
  const dados = await resposta.json();
  const lista = dados.results;

  return (
    <main className="grade-pokemons">
      {lista.map(function(item, index) {
        return (
          <PokemonCard 
            key={item.name} 
            nome={item.name} 
            imagem={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (index + 1) + ".png"} 
          />
        );
      })}
    </main>
  );
}

