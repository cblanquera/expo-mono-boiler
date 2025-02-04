//modules
import React from 'react';
import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
//common
import Text from '@/modules/common/Text';
import View from '@/modules/common/View';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text type="title">This screen doesn't exist.</Text>
        <Link href="/" style={styles.link}>
          <Text type="link">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
