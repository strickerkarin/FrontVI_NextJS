import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Pokemon = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pokemonData, setPokemonData] = useState<any>([]);

  const getPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    console.log(data, "dataPokemon");
    setPokemonData(data);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="pokemon_container">
      <h1>{pokemonData?.name}</h1>
      <img
        src={pokemonData?.sprites?.front_default}
        alt={pokemonData?.name}
        width="200px"
      />
      <div className="props_box">
        <div className="prop_box">
          <h2>Abilities</h2>
          <ul>
            {pokemonData?.abilities?.map((ability: any) => (
              <li key={ability?.ability?.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
        <div className="prop_box">
          <h2>Height:</h2>
          <p>{pokemonData?.height}</p>
        </div>
        <div className="prop_box">
          <h2>Weight:</h2>
          <p>{pokemonData?.weight}</p>
        </div>
        <div className="prop_box">
          <h2>Types</h2>
          <ul>
            {pokemonData?.types?.map((type: any) => (
              <li key={type?.type?.name}>{type.type.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
