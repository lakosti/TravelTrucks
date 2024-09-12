import { useSelector } from "react-redux";

import IconsList from "../../components/IconsList/IconsList.jsx";

const Features = () => {
  // const { id } = useParams();
  // const dispatch = useDispatch();

  // const [features, setFeatures] = useState(""); //всі дані тепер тут

  // useEffect(() => {
  //   const fetchFeatures = async () => {
  //     try {
  //       const { payload } = await dispatch(getTrackById(id));
  //       setFeatures(payload);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchFeatures();
  // }, [dispatch, id]);

  const features = useSelector((state) => state.trucks.currentTrucks);

  return (
    <>
      {features && (
        <div style={{ backgroundColor: "orange" }}>
          <IconsList {...features} />
          <h3>Vehicle details</h3>
          <ul>
            <li>
              <span>Form</span>
              <span>{features.form}</span>
            </li>
            <li>
              <span>Length</span>
              <span>{features.length}</span>
            </li>
            <li>
              <span>Width</span>
              <span>{features.width}</span>
            </li>
            <li>
              <span>Height</span>
              <span>{features.height}</span>
            </li>
            <li>
              <span>Tank</span>
              <span>{features.tank}</span>
            </li>
            <li>
              <span>Consumption</span>
              <span>{features.consumption}</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Features;
