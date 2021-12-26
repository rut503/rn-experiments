import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Footer!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    marginTop: 10,
    padding: 10,
    width: '100%',
},
text: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 20,
  },
});
