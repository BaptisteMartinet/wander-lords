import { LatLng } from 'react-native-maps';

export function getPolygonCenter(polygon: LatLng[]): LatLng {
  if (polygon.length <= 0) throw new Error('Unable to compute poylgon center without coords');

  const { minLat, maxLat, minLng, maxLng } = polygon.reduce<{
    minLat: number;
    maxLat: number;
    minLng: number;
    maxLng: number;
  }>(
    (acc, val) => ({
      minLat: Math.min(val.latitude, acc.minLat),
      maxLat: Math.max(val.latitude, acc.maxLat),
      minLng: Math.min(val.longitude, acc.minLng),
      maxLng: Math.max(val.longitude, acc.maxLng),
    }),
    {
      minLat: Infinity,
      maxLat: -Infinity,
      minLng: Infinity,
      maxLng: -Infinity,
    }
  );

  return {
    latitude: (minLat + maxLat) / 2,
    longitude: (minLng + maxLng) / 2,
  };
}

export function genSquareCoords(topLeft: LatLng, width: number): LatLng[] {
  const { latitude, longitude } = topLeft;
  const latitudeWidth = width / 2;
  return [
    { latitude, longitude },
    { latitude, longitude: longitude + width },
    { latitude: latitude - latitudeWidth, longitude: longitude + width },
    { latitude: latitude - latitudeWidth, longitude },
  ];
}
