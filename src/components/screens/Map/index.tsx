import type { ScreenProps } from '@components/Navigator';

import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import mapStyle from './mapStyle.json';

export type HomeProps = ScreenProps<'Map'>;

export default function Home(props: HomeProps) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        showsUserLocation
        userLocationPriority="low"
        initialCamera={{
          center: { latitude: 48.87239371685871, longitude: 2.7172108367085457 }, // todo initial location
          heading: 0,
          pitch: 0,
          zoom: 16,
        }}
        minZoomLevel={5}
        maxZoomLevel={16}
        onRegionChangeComplete={(region, details) => {
          console.log(region);
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
