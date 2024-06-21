import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {IMAGES} from '@src/assets/images';
import layouts from '@src/theme/layout';
import {px} from '@src/utils';
import {StackActions, useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '@src/navigation';
import {COLORS} from '@src/theme';

const LandingPage = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  React.useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('BottomStack'));
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={IMAGES.LOGO} resizeMode="contain" style={styles.logo} />
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    ...layouts.allCentered,
    ...layouts.flexed,
    backgroundColor: COLORS.WHITE,
  },
  logo: {
    width: px(200),
    height: px(200),
  },
});
