import { View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import { ScreenHeader } from '../index'

import { icons, COLORS, SIZES} from '../../constants'

import SearchBar from './search/SearchBar'
import NearbyBusiness from './nearby/NearbyBusiness'
import Map from './map/Map'

import business from '../../exemple.json'

const data = business.data

const Home = ({ navigation }) => {

  navigation.setOptions({
    headerStyle: {
      backgroundColor: COLORS.lightWhite
    },
    title: '',
    headerShadowVisible: false,
    headerLeft: () => (
      <ScreenHeader
        iconUrl={icons.menu}
        handlePress={() => {}}
      />
    ),
    headerRight: () => (
      <ScreenHeader
        iconUrl={icons.profil}
        handlePress={() => {}}
      />
    )
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite
      }}
    >
      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium
          }}
        >
          <SearchBar 
            navigation={navigation}
          />
          <Map />
          <NearbyBusiness 
            navigation={navigation}
            data = {data}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home