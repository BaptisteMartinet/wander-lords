import Point from './Point';

export interface TerrainArgs {
  bottomLeft: Point;
  /**
   * @description In meters
   */
  size: number;
}

export default class Terrain {
  private _bottomLeft;
  private _topLeft;
  private _topRight;
  private _bottomRight;
  private _size;

  constructor(args: TerrainArgs) {
    const { bottomLeft, size } = args;
    this._bottomLeft = bottomLeft;
    this._topLeft = Point.fromMeterCoords({ x: bottomLeft.x, y: bottomLeft.y + size });
    this._topRight = Point.fromMeterCoords({ x: bottomLeft.x + size, y: bottomLeft.y + size });
    this._bottomRight = Point.fromMeterCoords({ x: bottomLeft.x + size, y: bottomLeft.y });
    this._size = size;
  }

  get polygon() {
    return [
      { latitude: this._bottomLeft.lat, longitude: this._bottomLeft.lng },
      { latitude: this._topLeft.lat, longitude: this._topLeft.lng },
      { latitude: this._topRight.lat, longitude: this._topRight.lng },
      { latitude: this._bottomRight.lat, longitude: this._bottomRight.lng },
    ];
  }
}
