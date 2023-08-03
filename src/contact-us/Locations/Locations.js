import { useState } from "react";
import "./Locations.css";
import Maps from "../../shared/Map";


const Locations = () => {
  const [index, setIndex] = useState(2);
  const markers = [
    {
      id: 1,
      name: "Paphos, Cyprus 22033",
      phone: "+30 210 3635",
      hours: "Mon to Fri:  9:00 AM - 6:00 PM",
      email: "info@century21.com",
      position: { lat: 34.775930, lng: 32.421480 }
    },
    {
      id: 2,
      name: "Tsakalof 15, Kolonaki, Limassol, Cyprus 22033",
      phone: "+1 456 3635",
      hours: "Mon to Fri:  8:00 AM - 5:00 PM",
      email: "info2@century21.com",
      position: { lat: 34.669820, lng: 33.043850 }
    },
    {
      id: 3,
      name: "3rd Address, Cyprus 22033",
      phone: "+30 210 1111",
      hours: "Mon to Fri:  10:00 AM - 7:00 PM",
      email: "info3@century21.com",
      position: { lat: 34.682199, lng: 33.009294 }
    }
  ];

  const handleClick = index => {
    setIndex(index);
  }

  return (
    <div className="main-wrapper">
      <div className="form-header">
        FIND US IN ONE OF THREE OFFICES IN CYPRUS:
      </div>
      <div className="Locations">
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
                  {markers[index].name}
                </div>
              </div>
              <div className="text-container">
                <div className="text-header">
                PHONE
                </div>
                <div className="text-details">
                {markers[index].phone}
                </div>
              </div>
            </div>
            <div className="fields-container">
              <div className="text-container">
                <div className="text-header">
                BUSINESS HOURS
                </div>
                <div className="text-details">
                  {markers[index].hours}
                </div>
              </div>
                <div className="text-container">
                  <div className="text-header">
                  EMAIL
                  </div>
                  <div className="text-details">
                    {markers[index].email}
                  </div>
                </div>
            </div>
          </> 
        </div>
      </div>
    </div>
  );
};

export default Locations;