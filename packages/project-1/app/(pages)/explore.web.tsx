//modules
import { StyleSheet } from 'react-native';
//common
import ExternalLink from '@/modules/common/ExternalLink';
import ScrollView from '@/modules/common/ScrollView';
import Text from '@/modules/common/Text';
import View from '@/modules/common/View';
import Icon from '@/modules/common/Icon';

export default function ExploreScreen() {
  return (
    <ScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Icon
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <View style={styles.titleContainer}>
        <Text type="title">Explore</Text>
      </View>
      <Text>This app includes example code to help you get started.</Text>
      <ExternalLink href="https://docs.expo.dev/router/introduction">
        <Text type="link">Learn more</Text>
      </ExternalLink>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
