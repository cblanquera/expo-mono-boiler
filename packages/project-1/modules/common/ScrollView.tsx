//modules
import type { PropsWithChildren, ReactElement } from 'react';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
//theme
import useColorScheme from '../theme/useColorScheme';
//common
import View from './View';


export type ScrollViewProps = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ScrollView(props: ScrollViewProps) {
  const { children, headerImage, headerBackgroundColor } = props;
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-250, 0, 250],
            [-250 / 2, 0, 250 * 0.75]
          )
        },
        {
          scale: interpolate(
            scrollOffset.value, 
            [ -250, 0, 250 ], 
            [ 2, 1, 1 ]
          )
        }
      ]
    };
  });

  return (
    <View className="flex-1">
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom: 0 }}
        contentContainerStyle={{ paddingBottom: 0 }}>
        <Animated.View className="overflow-hidden h-[250px]" style={[
          { backgroundColor: headerBackgroundColor[colorScheme] },
          headerAnimatedStyle,
        ]}>
          {headerImage}
        </Animated.View>
        <View className="flex-1 p-8 gap-4 overflow-hidden">
          {children}
        </View>
      </Animated.ScrollView>
    </View>
  );
};
