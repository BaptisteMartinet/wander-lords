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

export class Point {
  private _meterCoords;

  constructor(private _lat: number, private _lng: number) {
    this._meterCoords = toMeterCoords(_lat, _lng);
  }

  public static fromMeterCoords(x: number, y: number) {
    const latLng = toLatLng(x, y);
    return new Point(latLng.x, latLng.y);
  }

  public static fromLatLng(lat: number, lng: number) {
    return new Point(lat, lng);
  }

  get lat() {
    return this._lat;
  }

  get lng() {
    return this._lng;
  }

  get x() {
    return this._meterCoords.x;
  }

  get y() {
    return this._meterCoords.y;
  }

  public toString() {
    return `LatLng: [${this._lat}, ${this._lng}] | Meters: [${this._meterCoords.x}, ${this._meterCoords.y}]`;
  }
}
