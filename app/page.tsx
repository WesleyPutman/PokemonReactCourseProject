import { PokemonCard } from "./components/Card";
import { pokemons } from "@/constants/pokemons";

export default function Home() {
  return (
    <>
      <main className="layout">
        <header className="layout__header">
          <h1 className="layout__header__title">Pokedex</h1>
        </header>

        <section>
          <div>
            <div>
              <h2>Cards collection</h2>
            </div>

            <div className="cards-collection__body flex gap-8">
              
              {pokemons.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  id={pokemon.id}
                  url={pokemon.url}
                  alt={pokemon.alt}
                  name={pokemon.name}
                  hp={pokemon.hp}
                  averagePrice={pokemon.averagePrice}
                  updatedDate={pokemon.updatedDate}
                />
              ))}
            </div>
          </div>
          <div className="wishlist">
            <div className="wishlist__header">
              <h2 className="wishlist__header__title">Wishlist</h2>
            </div>

            <div className="wishlist__body"></div>
          </div>
        </section>
      </main>
    </>
  );
}
