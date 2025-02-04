//modules
import { Text } from 'react-native';
import { Link } from 'expo-router';
//local
import Drawer from './Drawer';

export type AsideLeftProps = {
  show: (show: boolean) => void,
  visible: boolean
};

export default function AsideLeft({ show, visible }: AsideLeftProps) {
  return (
    <Drawer
      from="left"
      visible={visible}
      onClose={() => show(false)}
    >
      <Text className="font-bold tx-xl">Left Drawer Content</Text>
      <Link href="/(pages)/profile">Profile</Link>
    </Drawer>
  );
}