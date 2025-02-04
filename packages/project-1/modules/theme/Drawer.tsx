//modules
import { useEffect, useRef } from 'react';
import { 
  Animated, 
  Dimensions, 
  View, 
  Pressable, 
  Modal
} from 'react-native';

export type DrawerProps = {
  visible: boolean, 
  from?: 'left' | 'right',
  onClose: () => void, 
  children: React.ReactNode 
};

export default function Drawer(props: DrawerProps) {
  const { visible, onClose, children, from = 'left' } = props;
  const slideTo = new Animated.Value(from === 'left' 
    ? -Dimensions.get('window').width 
    : Dimensions.get('window').width
  );
  
  const slide = useRef(slideTo).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slide, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(slide, {
        toValue: from === 'left' 
          ? -Dimensions.get('window').width 
          : Dimensions.get('window').width,
        duration: 300,
        useNativeDriver: true
      }).start();
    }
  }, [visible, slide, from]);

  return (
    <Modal
      transparent
      visible={visible}
      onRequestClose={onClose}
      // Disable default animations
      animationType="none" 
    >
      <View className="flex-1 flex-row">
        {/* Overlay */}
        <Pressable className="flex-1 bg-black/50" onPress={onClose} />
        {/* Sliding Drawer */}
        <Animated.View
          //className doesn't work in Animated.View
          style={{ 
            [from]: 0, 
            position: 'absolute', 
            height: '100%',
            transform: [{ translateX: slide }] 
          }}
        >
          <View className="w-64 h-full bg-white p-5 justify-center">
            {children}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}