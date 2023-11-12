import { toLatLng, toMeterCoords } from './projection';

export default class Point {
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
