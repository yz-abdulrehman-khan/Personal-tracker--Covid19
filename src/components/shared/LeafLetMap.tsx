import { useRef, useEffect, useState } from 'react';
import { Map, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import L, { PointTuple } from 'leaflet';

import * as ELG from 'esri-leaflet-geocoder';

import 'leaflet/dist/leaflet.css';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';

const zoom = 12;

// @ts-expect-error
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetina: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export const LeafLetMap = ({ handleLocationChange = {} }: any) => {
  const [location, setLocation] = useState<PointTuple>([53.5511, 9.9937]);
  const [popUpText, setPopUpText] = useState<string>('Hamburg');

  const mapRef = useRef();

  useEffect(() => {
    if (!mapRef.current) return;
    // @ts-expect-error
    const control = ELG.geosearch();
    // @ts-expect-error
    control.addTo(mapRef.current.leafletElement);
    control.on('results', handleOnSearchResults);

    return () => control.off('results', handleOnSearchResults);
  }, []);

  const handleOnSearchResults = (data) => {
    console.log(data, 'data');
    setLocation([data.results[0].latlng.lat, data.results[0].latlng.lng]);
    setPopUpText(
      `${data.results[0].text}, ${data.results[0].properties.Region}`
    );
    handleLocationChange(
      `${data.results[0].text}, ${data.results[0].properties.Region}`
    );
  };

  return (
    <>
      <Map
        ref={mapRef}
        center={location}
        zoom={zoom}
        zoomControl={false}
        fullscreenControl={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ZoomControl position="bottomright" />
        <div className="pointer" />
        <Marker position={location}>
          <Popup>{popUpText}</Popup>
        </Marker>
      </Map>
    </>
  );
};
