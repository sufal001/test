//Import api data from file
import seriesData from "../api/seriesData.json";

// create component
const Netflixseries = () => {
  return (
    // <ul>
    <div className="main">
      {seriesData.map((alu) => (
        <div key={alu.id} className="sub">
          <div>
            <img src={alu.image_url} alt="image" width="40%" height="40%" />
            <h2>Name: {alu.name}</h2>
            <h2>Rating: {alu.rating}</h2>
            <p>Description: {alu.description}</p>
            <p>
              <b>Genre: {alu.genre}</b>
            </p>
            <p>
              <b>Cast: {alu.cast}</b>
            </p>
            <a href={alu.watch_url} target="_blank">
              <button> Watch Now </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Netflixseries;
