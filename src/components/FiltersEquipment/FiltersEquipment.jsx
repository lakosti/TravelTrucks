import icons from "../../assets/img/icons.svg";

const FiltersEquipment = () => {
  return (
    <>
      <h3>Vehicle equipment</h3>
      <ul>
        <li>
          <svg width={32} height={32}>
            <use href={`${icons}#ac`} />
          </svg>
        </li>
        <li>
          <svg width={32} height={32}>
            <use href={`${icons}#automatic`} />
          </svg>
        </li>
        <li>
          <svg width={32} height={32}>
            <use href={`${icons}#kitchen`} />
          </svg>
        </li>
        <li>
          <svg width={32} height={32}>
            <use href={`${icons}#tv`} />
          </svg>
        </li>
        <li>
          <svg width={32} height={32}>
            <use href={`${icons}#bathroom`} />
          </svg>
        </li>
      </ul>
    </>
  );
};

export default FiltersEquipment;
