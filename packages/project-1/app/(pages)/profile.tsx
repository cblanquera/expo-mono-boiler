/// <reference types="react/experimental" />

//modules
import React from 'react';
import { Image, StyleSheet, ActivityIndicator } from 'react-native';
//common
import search from '@/modules/profile/search';
import ScrollView from '@/modules/common/ScrollView';
import Text from '@/modules/common/Text';
import View from '@/modules/common/View';

export default function ProfileScreen() {
  return (
    <ScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <View style={styles.titleContainer}>
        <Text className="text-red-600" type="title">Profile Search</Text>
      </View>
      <View style={styles.stepContainer}>
        <React.Suspense fallback={<ActivityIndicator />}>
          {search({ query: 'profile' })}
        </React.Suspense>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
