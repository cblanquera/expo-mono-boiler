//modules
import { Image, StyleSheet, Platform } from 'react-native';
//common
import ScrollView from '@/modules/common/ScrollView';
import Text from '@/modules/common/Text';
import View from '@/modules/common/View';

export default function HomeScreen() {
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
        <Text className="text-red-600" type="title">Welcome!</Text>
      </View>
      <View style={styles.stepContainer}>
        <Text type="subtitle">Step 1: Try it</Text>
        <Text>
          Edit <Text type="defaultSemiBold">app/(tabs)/index.tsx</Text> to see changes.
          Press{' '}
          <Text type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </Text>{' '}
          to open developer tools.
        </Text>
      </View>
      <View style={styles.stepContainer}>
        <Text type="subtitle">Step 2: Explore</Text>
        <Text>
          Tap the Explore tab to learn more about what's included in this starter app.
        </Text>
      </View>
      <View style={styles.stepContainer}>
        <Text type="subtitle">Step 3: Get a fresh start</Text>
        <Text>
          When you're ready, run{' '}
          <Text type="defaultSemiBold">npm run reset-project</Text> to get a fresh{' '}
          <Text type="defaultSemiBold">app</Text> directory. This will move the current{' '}
          <Text type="defaultSemiBold">app</Text> to{' '}
          <Text type="defaultSemiBold">app-example</Text>.
        </Text>
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
