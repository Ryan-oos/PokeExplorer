type PokemonDetailsPageProps = {
  params: Promise<{
    name: string;
  }>;
};

type PokemonAbility = {
  ability: {
    name: string;
  };
};

type PokemonType = {
  type: {
    name: string;
  };
};

type PokemonSprites = {
  front_default: string | null;
};

type Pokemon = {
  name: string;
  weight: number;
  height: number;
  abilities: PokemonAbility[];
  types: PokemonType[];
  sprites: PokemonSprites;
};

async function fetchPokemon(name: string): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(name.toLowerCase())}`);
  if (!response.ok) {
    throw new Error('Pokémon não encontrado');
  }
  return response.json();
}

export default async function PokemonDetailsPage({ params }: PokemonDetailsPageProps) {
  const { name } = await params;
  const poke = await fetchPokemon(name);

  return (
    <div className="conteudo-central">
      <h1 className="nome-pokemon">{poke.name}</h1>
      <img src={poke.sprites.front_default || ''} alt={poke.name} className="detalhes-imagem" />
      <div className="caixa-branca">
        <div className="detalhes-info">
          <div><strong>Tipo(s):</strong> {poke.types.map(t => t.type.name).join(', ')}</div>
          <div><strong>Peso:</strong> {poke.weight / 10} kg</div>
          <div><strong>Altura:</strong> {poke.height / 10} m</div>
        </div>
        <div className="habilidades-section">
          <h3>Habilidades:</h3>
          <div className="habilidades-lista">
            {poke.abilities.slice(0, 3).map((h) => (
              <p key={h.ability.name} className="nome-pokemon">{h.ability.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}