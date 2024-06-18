import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet's default icon issue with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const Map = () => {
    return (
        <MapContainer center={[20, 0]} zoom={2} style={{ height: "600px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[28.5721, -80.648]}>
                <Popup>
                    Kennedy Space Center, USA
                </Popup>
            </Marker>
            <Marker position={[51.5171, -0.1276]}>
                <Popup>
                    London, UK
                </Popup>
            </Marker>
            <Marker position={[35.6895, 139.6917]}>
                <Popup>
                    Tokyo, Japan
                </Popup>
            </Marker>
            {/* Add more markers as needed */}
        </MapContainer>
    );
};

export default Map;

