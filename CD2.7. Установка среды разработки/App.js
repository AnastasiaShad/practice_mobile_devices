import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <Text style={styles.paragraph}>
        Hello world.
        This is 11 🧐 
      </Text>
      <Button
        color="#841584"
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Image style={styles.logo} source={require('./assets/cat.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 228,
    width: 228,
  }
});
