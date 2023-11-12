import proj4 from 'proj4';

/*
  Docs:
  https://github.com/proj4js/proj4js
  https://epsg.io/3857
*/

const LatLngProjector = 'EPSG:4326'; // WGS84 (degrees)
const MetersProjector = 'EPSG:3857'; // GOOGLE (meters)

export function toMeterCoords(lat: number, lng: number) {
  return proj4(LatLngProjector, MetersProjector, { x: lng, y: lat });
}

export function toLatLng(x: number, y: number) {
  return proj4(MetersProjector, LatLngProjector, { x, y });
}
