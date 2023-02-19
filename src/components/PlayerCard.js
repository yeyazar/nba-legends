const PlayerCard = (item) => {
  const { name, img} = item;

  return (
    <div className="playercard">
      <img src={img} alt={name} />
      <h1 className="names">{name}</h1>
      <div className="stats-container">
        <ul>
            <p>Point</p>
            <p>Rebound</p>
            <p>Assist</p>
            <p>All-Star</p>
        </ul>
        
      </div>
    </div>
  );
};

export default PlayerCard;
