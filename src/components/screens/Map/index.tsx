import type { ScreenProps } from '@components/Navigator';

import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, LatLng } from 'react-native-maps';
import * as Location from 'expo-location';
import mapStyle from './mapStyle.json';

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
          zoom: 16,
        }}
        minZoomLevel={5}
        maxZoomLevel={16}
        rotateEnabled={false}
        onRegionChangeComplete={(region, details) => {
          /* TODO call api with new region */
        }}
      />
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
