import * as React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {styles} from './style';
import MainLayout from '@src/components/shared/mainLayout';
import MainHeader from '@src/components/shared/mainHeader';
import {IMAGES} from '@src/assets/images';
import BabyCard from '@src/components/cards/babyCard';
import {HOME_FAKE_DATE} from '@src/fackers';
import layouts from '@src/theme/layout';
import CategoryCard from '@src/components/cards/category';

const Home = () => {
  return (
    <MainLayout header={<MainHeader />}>
      <Image source={IMAGES.SOON} resizeMode="contain" style={styles.img} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={HOME_FAKE_DATE.BABY_CARDS}
        numColumns={2}
        contentContainerStyle={{...layouts.yCentered}}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={({item, index}) => <BabyCard item={item} index={index} />}
      />

      <Text style={styles.title}>{'Main Categories'}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={HOME_FAKE_DATE.CATEGORY_CARDS}
        horizontal
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={({item, index}) => (
          <CategoryCard item={item} index={index} />
        )}
      />

      <Text style={styles.title}>{'Main Stores'}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={HOME_FAKE_DATE.STORES_CARDS}
        horizontal
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={({item, index}) => (
          <CategoryCard item={item} index={index} />
        )}
      />
    </MainLayout>
  );
};

export default Home;
