import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  Button
} from 'react-native'
import React, { useState } from 'react'

import { ScreenHeader } from '../index'

import { icons, COLORS, SIZES } from '../../constants'

import styles from './search/shearchBar.style'
import NearbyBusiness from './nearby/NearbyBusiness'
import Map from './map/Map'

import useFetchLocation from '../../hook/fetchLocation'
import useFetchData from '../../hook/fetchData'

const types = ["restaurant", "cafe", "bar", "hotel", "shopping", "museum", "event", "park", "gym", "spa"]

const Home = ({ navigation }) => {

  const [activeType, setActivateType] = useState(null)
  const { location, error, locationIsLoading, refetchLocation } = useFetchLocation()

  
  const { data, isLoadingData, errorData, refetchData } = useFetchData(null, null)

  console.log('data')
  console.log(data)
  
  if(data.length == 0) console.log('data is empty')

/*
  isLoadingData = false
  errorData = null*/
  navigation.setOptions({
    headerStyle: {
      backgroundColor: COLORS.lightWhite
    },
    title: '',
    headerShadowVisible: false,
    headerLeft: () => (
      <ScreenHeader
        iconUrl={icons.menu}
        handlePress={() => { }}
      />
    ),
    headerRight: () => (
      <ScreenHeader
        iconUrl={icons.profil}
        handlePress={() => { }}
      />
    )
  })

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
          <View>
            <View
              style={styles.container}
            >
              {/*}
        <Button
            title="Go to Second"
            onPress={() => navigation.navigate('Second')}
        />
        */}
              <Text
                style={styles.userName}
              >
                Hello username
              </Text>
              <Text
                style={styles.welcomeMessage}
              >
                Find a place to eat, drink, shop or relax
              </Text>
            </View>

            <View
              style={styles.searchContainer}
            >
              <View
                style={styles.searchWrapper}
              >
                <TextInput
                  style={styles.searchInput}
                  placeholder="what are you looking for?"
                  onChange={(val) => { }}
                />
              </View>
              <TouchableOpacity
                style={styles.searchBtn}
              >
                <Image
                  source={icons.search}
                  style={styles.searchBtnImage}
                />
              </TouchableOpacity>
            </View>

            <View
              style={styles.tabsContainer}
            >
              <FlatList
                data={types}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.tab(activeType, item)}
                    onPress={() => {
                      setActivateType(item)
                      if (locationIsLoading === false && error === null) {
                        refetchData(item, location)
                      }
                    }}
                  >
                    <Text
                      style={styles.tabText(activeType, item)}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item}
                contentContainerStyle={{ columnGap: SIZES.xSmall }}
                horizontal
              />
            </View>
          </View>
          <Map
            navigation={navigation}
            data={data.data}
            location={location}
            locationIsLoading={locationIsLoading}
            error={error}
          />
          <NearbyBusiness
            navigation={navigation}
            data={data.data}
            location={location}
            locationIsLoading={locationIsLoading}
            isLoadingData={isLoadingData}
            errorData={errorData}
            locationError={error}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home