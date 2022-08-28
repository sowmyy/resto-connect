import { MapStyles } from './styles';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const Map = (props) => {
  return (
    <MapStyles>
      <MapContainer center={[12.980263, 80.199015]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {props.data && props.data.length > 0 &&
          props.data.map((item) => (
            <Marker position={[item.latitude, item.longitude]}>
              <Popup>
                <strong>Name:</strong> {item.name} <br />
                <strong>Price for Two:</strong> {item.priceForTwo} <br />
                <strong>Rating:</strong> {item.rating}
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </MapStyles>
  );
};

export default Map;
