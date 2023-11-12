import proj4 from 'proj4';

/*
  Docs:
  https://github.com/proj4js/proj4js
  https://epsg.io/3857
*/

const LatLngProjector = 'EPSG:4326'; // WGS84 (degrees)
const MetersProjector = 'EPSG:3857'; // GOOGLE (meters)

export function latLngToMeters(args: { lat: number; lng: number }) {
  const { lat, lng } = args;
  return proj4(LatLngProjector, MetersProjector, { x: lng, y: lat });
}

export function metersToLatLng(args: { x: number; y: number }) {
  const { x, y } = args;
  const { x: lng, y: lat } = proj4(MetersProjector, LatLngProjector, { x, y });
  return { lat, lng };
}
