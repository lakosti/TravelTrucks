import icons from "../../assets/img/icons.svg";

const types = ["van", "full", "alcove"];
const names = ["Van", "Fully Integrated", "Alcove"];

const FiltersType = () => {
  return (
    <>
      <h3>Vehicle type</h3>

      <ul>
        {types.map((type, i) => (
          <li key={i}>
            <svg width={32} height={32}>
              <use href={`${icons}#${type}`} />
            </svg>
            <p>{names[i]}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FiltersType;
