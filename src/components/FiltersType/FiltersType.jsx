import icons from "../../assets/img/icons.svg";

const FiltersType = () => {
  return (
    <>
      <h3>Vehicle type</h3>
      <ul>
        <li>
          <svg width={32} height={32}>
            <use href={`${icons}#van`} />
          </svg>
        </li>
        <li>
          <svg width={32} height={32}>
            <use href={`${icons}#full`} />
          </svg>
        </li>
        <li>
          <svg width={32} height={32}>
            <use href={`${icons}#alcove`} />
          </svg>
        </li>
      </ul>
    </>
  );
};

export default FiltersType;
