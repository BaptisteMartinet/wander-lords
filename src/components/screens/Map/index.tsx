import type { LatLng } from 'react-native-maps';
import type { ScreenProps } from '@components/Navigator';

import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { Point, toLatLng } from '@utils/index';
import mapStyle from './mapStyle.json';

const WorldBounds = {
  sw: new Point(-85.06, -180),
  ne: new Point(85.06, 180),
};

const EdgeSize = 1_000_000; // in meters

function genGrid() {
  const { sw, ne } = WorldBounds;
  const markers: LatLng[] = [];
  for (let x = sw.x; x < ne.x; x += EdgeSize) {
    for (let y = sw.y; y < ne.y; y += EdgeSize) {
      const coords = toLatLng(x, y);
      markers.push({ latitude: coords.y, longitude: coords.x });
    }
  }
  return markers;
}

const markers = genGrid();
console.log('Markers: ', markers.length);

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
        maxZoomLevel={17}
        rotateEnabled={false}
        onRegionChangeComplete={(region, details) => {
          /* TODO call api with new region */
          console.log(region.latitude, region.longitude);
        }}
      >
        {markers.map((marker, idx) => (
          <Marker key={idx} coordinate={marker} title={`Marker#${idx}`} />
        ))}
        {/* {terrains.map((terrain, idx) => (
          <Polygon
            key={idx}
            coordinates={terrain.coords}
            tappable
            onPress={() => console.log('tap')}
            strokeWidth={10}
          />
        ))} */}
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
