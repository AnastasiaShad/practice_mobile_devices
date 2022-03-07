import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>New Elements в Новой Третьяковке</Text>
      <Text style={styles.textread}>12 февраля в рамках публичной образовательной программы выставки New Elements при поддержке «Лаборатории Касперского» пройдет симпозиум, посвященный новым художественным практикам, которые переосмысляют взаимоотношения цифровых и аналоговых вычислительных процессов и систем. Тематические дискуссии будут разбиты на три секции: «Science-art сегодня: трансформации междисциплинарных сообществ»,  «Аутографический мир» и  «Вычисляя с природой». </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
   textread: {
    margin: 24,
    marginTop: -9,
    fontSize: 12,
    textAlign: 'left',
  },
  paragraph: {
    margin: 24,
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  logo: {
    height: 128,
    width: 228,
  }
});
