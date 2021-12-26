import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GKKCard, GKKButton } from 'shared-components';

import Footer from "./components/footer"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>These are App Components</Text>
      
      <GKKCard content="Hi" />
      <GKKButton />

      <Footer />
      <StatusBar style="auto" />
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
  text: {
    color: 'maroon',
    fontSize: 25
  }
});
