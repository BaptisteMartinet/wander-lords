import { metersToLatLng, latLngToMeters } from './projection';

export interface PointArgs {
  lat: number;
  lng: number;
}

export default class Point {
  private _lat;
  private _lng;
  private _x;
  private _y;

  constructor(args: PointArgs) {
    const { lat, lng } = args;
    this._lat = lat;
    this._lng = lng;
    const { x, y } = latLngToMeters({ lat, lng });
    this._x = x;
    this._y = y;
  }

  public static fromMeterCoords(args: { x: number; y: number }) {
    const { x, y } = args;
    const { lat, lng } = metersToLatLng({ x, y });
    return new Point({ lat, lng });
  }

  get lat() {
    return this._lat;
  }

  get lng() {
    return this._lng;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  public toString() {
    return `LatLng: [${this._lat}, ${this._lng}] | Meters: [${this._x}, ${this._y}]`;
  }
}
