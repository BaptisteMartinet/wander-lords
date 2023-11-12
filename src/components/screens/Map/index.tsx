import type { LatLng } from 'react-native-maps';
import type { ScreenProps } from '@components/Navigator';

import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Polygon } from 'react-native-maps';
import * as Location from 'expo-location';
import { Point, Terrain } from '@utils/index';
import mapStyle from './mapStyle.json';

const WorldBounds = {
  sw: new Point({ lat: -85.06, lng: -180 }),
  ne: new Point({ lat: 85.06, lng: 180 }),
};

console.log(WorldBounds.sw.toString());
console.log(WorldBounds.ne.toString());

console.log('X diff: ', WorldBounds.ne.x - WorldBounds.sw.x);
console.log('Y diff: ', WorldBounds.ne.y - WorldBounds.sw.y);

const EdgeSize = 50; // in meters

function genTerrains() {
  const start = new Point({ lat: 48.87358869573632, lng: 2.71393284201622 });
  const terrains: Terrain[] = [];
  for (let x = start.x; x < start.x + 1000; x += EdgeSize) {
    for (let y = start.y; y < start.y + 1000; y += EdgeSize) {
      const bottomLeft = Point.fromMeterCoords({ x, y });
      terrains.push(new Terrain({ bottomLeft, size: EdgeSize }));
    }
  }
  return terrains;
}

const terrains = genTerrains();

export type HomeProps = ScreenProps<'Map'>;

export default function Home(props: HomeProps) {
  const [location, setLocation] = React.useState<LatLng | null>(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })().catch(console.error);
  }, []);

  if (!location) return null;
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        showsUserLocation
        userLocationPriority="low"
        initialCamera={{
          center: location,
          heading: 0,
          pitch: 0,
          zoom: 17,
        }}
        // minZoomLevel={5}
        // maxZoomLevel={17}
        rotateEnabled={false}
        onRegionChangeComplete={(region, details) => {
          /* TODO call api with new region */
          console.log(region.latitude, region.longitude);
        }}
      >
        {terrains.map((terrain, idx) => (
          <Polygon
            key={idx}
            coordinates={terrain.polygon}
            tappable
            onPress={() => console.log(`Pressed tile#${idx}`)}
            strokeWidth={4}
            strokeColor="white"
            fillColor="rgba(242, 170, 126, .5)"
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
