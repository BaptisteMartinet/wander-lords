import type { ScreenProps } from '../Navigator';

import { StyleSheet, Text, View } from 'react-native';

export type HomeProps = ScreenProps<'Home'>;

export default function Home(props: HomeProps) {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
