//modules
import { useEffect, useState } from 'react';
import { useColorScheme as useNativeColorScheme } from 'react-native';

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
export default function useColorScheme() {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const colorScheme = useNativeColorScheme();

  if (hasHydrated) {
    return colorScheme;
  }

  return 'light';
}
