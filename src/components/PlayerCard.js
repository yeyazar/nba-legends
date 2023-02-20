import { useState } from "react";

const PlayerCard = ({ name, img, statistics }) => {
  /* console.log(statistics); */
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="playercard" onClick={handleToggle}>
      
      {toggle ? (
        <img src={img} alt={name} />
      ) : (
        <div className="stats-container">
          <ul className="inner-container">
            {statistics.map((item2, index) => {
              return (
                <p className="list" key={index}>
                  🏀{item2}
                </p>
              );
            })}
          </ul>
        </div>
      )}

      <h4 className="names">{name}</h4>

    </div>
  );
};

export default PlayerCard;
