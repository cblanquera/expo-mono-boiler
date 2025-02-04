//modules
import { useEffect, useState } from 'react';
import { 
  DarkTheme, 
  DefaultTheme, 
  ThemeProvider 
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
//theme
import useColorScheme from '@/modules/theme/useColorScheme';
import HeaderLeft from '@/modules/theme/HeaderLeft';
import HeaderRight from '@/modules/theme/HeaderRight';
import AsideLeft from '@/modules/theme/AsideLeft';
import AsideRight from '@/modules/theme/AsideRight';
import '../global.css';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [leftDrawerVisible, setLeftDrawerVisible] = useState(false);
  const [rightDrawerVisible, setRightDrawerVisible] = useState(false);
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
        <Stack.Screen name="(pages)/index" options={{ 
          title: "APP NAME",
          headerShown: true,
          headerTintColor: "#fff",
          headerLeft: () => (<HeaderLeft show={setLeftDrawerVisible} />),
          headerRight: () => (<HeaderRight show={setRightDrawerVisible} />)
        }} />
        <Stack.Screen name="(pages)/profile" options={{ 
          title: "Profile Search",
          headerShown: true,
          headerTintColor: "#fff",
          headerLeft: () => (<HeaderLeft show={setLeftDrawerVisible} />),
          headerRight: () => (<HeaderRight show={setRightDrawerVisible} />)
        }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <AsideLeft show={setLeftDrawerVisible} visible={leftDrawerVisible} />
      <AsideRight show={setRightDrawerVisible} visible={rightDrawerVisible} />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
