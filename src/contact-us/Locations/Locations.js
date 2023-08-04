import { useEffect, useState } from "react";
import axios from "axios";

import "./Locations.css";
import Maps from "../../shared/Map";

const baseURL = "http://localhost:3030/markers";

const Locations = () => {
  const [markers, setMarkers] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response);
      setMarkers(response.data);
    });
  }, []);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/markers", requestOptions)
      .then((response) => response.json())
      .then((result) => setMarkers(result))
      .catch((error) => console.log("error", error));
  };

  const [index, setIndex] = useState(2);

  const handleClick = index => {
    setIndex(index);
  }

  return (
    <div className="main-wrapper">
      <div className="form-header">
        FIND US IN ONE OF THREE OFFICES IN CYPRUS:
      </div>
      <div className="Locations">
        {markers &&
        <>
          <Maps
            index={index}
            markers={markers}
            handleClick={handleClick}
          />
          <div className="form-container">
            <div className="btn-container">
              <button onClick={() => {handleClick(0)}} className={index === 0 ? 'btn-selected' : 'btn-unselected'}>
                PAPHOS OFFICE
              </button>
              <button onClick={() => {handleClick(1)}} className={index === 1 ? 'btn-selected' : 'btn-unselected'}>
                LIMASSOL OFFICE
              </button>
              <button onClick={() => {handleClick(2)}} className={index === 2 ? 'btn-selected' : 'btn-unselected'}>
                3RD ADDRESS OFFICE
              </button>
            </div>
              <>
              <div className="fields-container">
                <div className="text-container">
                  <div className="text-header">
                    ADDRESS
                  </div>
                  <div className="text-details">
                    {markers?.[index]?.name}
                  </div>
                </div>
                <div className="text-container">
                  <div className="text-header">
                  PHONE
                  </div>
                  <div className="text-details">
                  {markers?.[index]?.phone}
                  </div>
                </div>
              </div>
              <div className="fields-container">
                <div className="text-container">
                  <div className="text-header">
                  BUSINESS HOURS
                  </div>
                  <div className="text-details">
                    {markers?.[index]?.hours}
                  </div>
                </div>
                  <div className="text-container">
                    <div className="text-header">
                    EMAIL
                    </div>
                    <div className="text-details">
                      {markers?.[index]?.email}
                    </div>
                  </div>
              </div>
            </> 
          </div>
        </>
        }
      </div>
    </div>
  );
};

export default Locations;