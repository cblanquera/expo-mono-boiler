//modules
import { StyleProp, ViewStyle } from 'react-native';
import { SymbolView, SymbolViewProps, SymbolWeight } from 'expo-symbols';

export type IconProps = {
  className?: string;
  name: SymbolViewProps['name'];
  size?: number;
  color: string;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
};

export default function Icon(props: IconProps) {
  const {
    name,
    size = 24,
    color,
    style,
    weight = 'regular',
    className
  } = props;
  return (
    <SymbolView
      weight={weight}
      tintColor={color}
      resizeMode="scaleAspectFit"
      name={name}
      className={className}
      style={[
        { width: size, height: size },
        style
      ]}
    />
  );
}
