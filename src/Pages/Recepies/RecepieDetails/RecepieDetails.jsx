import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./RecepieDetails.css";

const RecepieDetails = () => {
  return (
    <div>
      <SectionTitle title="Recepie Details" details="Details" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
        <div className=" col-span-12 md:col-span-3">
          <h2>Left Area</h2>
        </div>
        <div className=" col-span-12 md:col-span-9">
          <h2>Right Area</h2>
        </div>
      </div>
    </div>
  );
};

export default RecepieDetails;
