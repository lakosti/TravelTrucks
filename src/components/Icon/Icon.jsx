import icons from "../../assets/img/icons.svg";

const Icon = ({ className, id }) => {
  return (
    <svg className={className}>
      <use href={`${icons}#${id}`} />
    </svg>
  );
};

export default Icon;
