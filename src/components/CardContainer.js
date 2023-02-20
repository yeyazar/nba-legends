import PlayerCard from "./PlayerCard";
import { data } from "../helper/data";
import { useState } from "react";

const CardContainer = () => {
  const [searchCard, setSearchCard] = useState("");
  return (
    <div className="card-container">
      <input
        onChange={(pname) => setSearchCard(pname.target.value)}
        className="search-bar"
        type="text"
        placeholder="Search Player..."
      />
      <div className="players">
        {data
          .filter((player) => {
            return player.name
              .toLocaleLowerCase()
              .includes(searchCard.toLocaleLowerCase());
          })
          .map((item, index) => {
            return <PlayerCard {...item} key={index} />;
          })}
      </div>
    </div>
  );
};

export default CardContainer;
