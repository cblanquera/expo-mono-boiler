//modules
import { View, Pressable } from 'react-native';
//common
import Icon from '../common/Icon';

export type HeaderLeftProps = {
  show: (show: boolean) => void
};

export default function Header({ show }: HeaderLeftProps) {
  return (
    <View className="p-3">
      <Pressable onPress={() => show(true)}>
        <Icon size={28} name="person.circle.fill" color="#fff" />
      </Pressable>
    </View>
  );
}