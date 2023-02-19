import PlayerCard from "./PlayerCard";
import { data } from "../helper/data";

const CardContainer = () => {
  /* console.log(data); */
  return (
    <div className="card-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search Player..."
      />
      <div className="players">{data.map((item, index) => {
        return (
          <PlayerCard {...item} key={index}/>
        );
      })}</div>
      
    </div>
  );
};

export default CardContainer;
