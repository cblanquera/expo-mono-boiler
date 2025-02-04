//modules
import type { ViewProps as NativeViewProps } from 'react-native';
import { View as NativeView } from 'react-native';
//theme
import useThemeColor from '../theme/useThemeColor';

export type ViewProps = NativeViewProps & {
  lightColor?: string;
  darkColor?: string;
  className?: string;
};

export default function View(props: ViewProps) {
  const { style, lightColor, darkColor, className, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor }, 
    'background'
  );
  return (
    <NativeView 
      style={[{ backgroundColor }, style]} 
      className={className} 
      {...otherProps} 
    />
  );
}
