import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const Map = ({ index = 0, markers, handleClick }) => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCiBaPgk2piF1qXTVWulKwzNDmN96DjxVA"
  })

  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  return isLoaded ? (
    <GoogleMap
      onLoad={handleOnLoad}
      mapContainerStyle={{ width: "100%", height: "30vh" }}
      options={{
        disableDefaultUI: true,
        mapTypeId: 'satellite',
        keyboardShortcuts: false,
      }}
    >
      {markers && markers?.map(({ id, position }, i) => (
        <Marker
          icon={{ 
            url: (require(`./../images/${i === index ? "marker_selected" : "marker_unselected"}.png`)),
            anchor: new window.google.maps.Point(17, 46),
            scaledSize: new window.google.maps.Size(45, 60)
          }}
          key={id}
          position={position}
          onClick={() => handleClick(i)}
        >
        </Marker>
      ))}
    </GoogleMap>
  ) : <></>
}

export default Map;
