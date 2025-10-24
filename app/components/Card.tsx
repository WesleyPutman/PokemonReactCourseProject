import { Pokemon } from "@/types/pokemon";
export const PokemonCard = (props: Pokemon) => {
  const { name, hp, image, url, alt, averagePrice, updatedDate } = props;

  return (
    <>
      <div className="flex-col py-16 px-8 bg-gray-100 text-black rounded-lg">
        <img src={image} alt={alt} className="w-[200px] h-auto"></img>
        <h2 className="py-4 text-2xl uppercase">{name}</h2>
        <p>{hp}</p>
        <p>{averagePrice}</p>
        <p>{updatedDate}</p>
      </div>
    </>
  );
};
