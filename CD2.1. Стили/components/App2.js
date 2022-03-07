import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App2 = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Button style={styles.butt}
        title="Читать далее"
         color="#bebebe"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    <Separator />
    
  </SafeAreaView>
);

const styles = StyleSheet.create({
    butt: {

    
  },
  container: {
    marginTop: -20,
    justifyContent: 'left',
    marginHorizontal: 95,
  },

  separator: {
    
    marginVertical: 8,
    borderBottomColor: '#737373',

  },
});

export default App2;