//modules
import { Text } from 'react-native';
//local
import Drawer from './Drawer';

export type AsideLeftProps = {
  show: (show: boolean) => void,
  visible: boolean
};

export default function AsideLeft({ show, visible }: AsideLeftProps) {
  return (
    <Drawer
      from="right"
      visible={visible}
      onClose={() => show(false)}
    >
      <Text className="font-bold tx-xl">Right Drawer Content</Text>
    </Drawer>
  );
}