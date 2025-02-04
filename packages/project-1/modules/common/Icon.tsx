//modules
import React from 'react';
import { OpaqueColorValue, StyleProp, TextStyle } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';

// Add your SFSymbol to MaterialIcons mappings here.
const MAPPING = {
  // See MaterialIcons here: https://icons.expo.fyi
  // See SF Symbols in the SF Symbols app on Mac.
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'person.circle.fill': 'account-circle',
  'line.3.horizontal': 'menu',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    React.ComponentProps<typeof MaterialIcons>['name']
  >
>;

export type IconName = keyof typeof MAPPING;
export type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
};

/**
 * An icon component that uses native SFSymbols on iOS, and 
 * MaterialIcons on Android and web. This ensures a consistent 
 * look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require 
 * manual mapping to MaterialIcons.
 */
export default function Icon(props: IconProps) {
  const {
    name,
    size = 24,
    color,
    style,
    className
  } = props;
  return (
    <MaterialIcons 
      color={color} 
      size={size} 
      name={MAPPING[name]} 
      style={style} 
      className={className} 
    />
  );
}
