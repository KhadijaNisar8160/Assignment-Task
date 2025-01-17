import { useState } from "react";
import cross from "../../../public/images/x.png";
import plus from "../../../public/images/plus.png";
const SkinImprovement = () => {
  const [treatments, setTreatments] = useState([
    "Chemical Peels",
    "Microdermabrasion",
    "Laser Treatments",
    "Light Therapies",
  ]);
  const [newTreatment, setNewTreatment] = useState("");

  const addTreatment = () => {
    if (newTreatment.trim() !== "") {
      setTreatments([...treatments, newTreatment.trim()]);
      setNewTreatment("");
    }
  };

  const removeTreatment = (index) => {
    setTreatments(treatments.filter((_, i) => i !== index));
  };

  return (
    <div className="w-[500px] bg-[#F2F5FF]  rounded-lg p-4">
      <div className="mb-4">
        <h1 className="text-lg font-Montserrat text-[15px] text-[#3E4147]">
          Skin improvement ( {treatments.length} )
        </h1>
        <p className=" text-[#AEB2BF] text-[11px]">Treatments</p>
      </div>

      <ul className="border rounded-md bg-white border-[#DADAFC]  overflow-y-scroll h-[30vh]">
        {treatments.map((treatment, index) => (
          <li
            key={index}
            className="flex font-Montserrat justify-between items-center border-b text-[12px] border-b-[#DADAFC] px-4 h-12 text-[#585C6A]"
          >
            <span>{treatment}</span>
            <button
              onClick={() => removeTreatment(index)}
              className="flex justify-center items-center border-l border-l-[#DADAFC] w-8 h-full"
            >
              <img
                src={cross}
                className="h-[16px] w-[16px] flex items-center justify-center"
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Add New Treatment */}
      <div className="flex items-center mt-4">
        <select
          value={newTreatment}
          onChange={(e) => setNewTreatment(e.target.value)}
          className="flex-grow border rounded-md px-3 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" className="text-[14px]">
            Select Treatment...
          </option>
          <option value="Chemical Peels">Chemical Peels</option>
          <option value="Microdermabrasion">Microdermabrasion</option>
          <option value="Laser Treatments">Laser Treatments</option>
          <option value="Light Therapies">Light Therapies</option>
        </select>
        <button
          onClick={addTreatment}
          className="ml-2 bg-white h-[48px] w-[48px] rounded-lg p-2 border flex items-center justify-center border-[#E4E4F8] "
        >
          <img src={plus} className="h-[16px] w-[16px]" />
        </button>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button className="px-4 py-2 text-[#6968EC] w-[220px] bg-white border border-[#E4E4F8] rounded-md hover:bg-blue-100 hover:text-black">
          Cancel
        </button>
        <button
          onClick={addTreatment}
          className="px-4 py-2 bg-[#6968EC] text-white  w-[220px] rounded-md "
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SkinImprovement;
