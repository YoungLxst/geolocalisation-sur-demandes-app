import { FC, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList
} from 'react-native'

import styles from './nearbyBusiness.style'
import { COLORS, SIZES } from '../../../constants'
import NearbyBusinessCard from './nearbyBusinessCard/NearbyBusinessCard'

const NearbyBusiness = ({ navigation, data, isLoadingData, errorData, location, locationIsLoading, locationError }) => {

  const [visible, setVisible] = useState(false)
  const [activeType, setActivateType] = useState(null)

  const toggleDropdown = () => {
    setVisible(!visible)
  }

  const tabs = ['note', 'distance', 'popularité']

  const renderDropdown = () => {


    if (visible) {
      return (
        <View
          style={styles.tabsContainer}
        >
          <FlatList
            data={tabs}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.tab(activeType, item)}
                onPress={() => {
                  setActivateType(item)
                  sortData(item)
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
      )
    }
  }

  const sortData = (item) => {
    if (!isLoadingData && errorData === null) {
      if (item === 'note') {
        data.sort((b, a) => {
          return a.rating - b.rating
        })
      }
      if (item === 'distance') { 
        while (locationIsLoading) {
          return <ActivityIndicator size="large" color={COLORS.primary} />
        }
        if (locationError) {
          return <Text>error</Text>
        }
        data.sort((b, a) => {
          let latA = location.latitude - a.latitude
          let longA = location.longitude - a.longitude
          let latB = location.latitude - b.latitude
          let longB = location.longitude - b.longitude
          let distanceA = Math.sqrt(latA * latA + longA * longA)
          let distanceB = Math.sqrt(latB * latB + longB * longB)
          return distanceB - distanceA
        })
      }
      if (item === 'popularité') {
        data.sort((b, a) => {
          return a.review_count - b.review_count
        })
      }
    }
  }

  return (
    <View>
      <View
        style={styles.header}
      >
        <Text
          style={styles.headerTitle}
        >
          Nearby business
        </Text>
        <TouchableOpacity
          onPress={toggleDropdown}
        >
          <View
            style={styles.dropdownContainer}
          >
            <Text
              style={styles.headerBtn}
            >trier par</Text>
          </View>

        </TouchableOpacity>

      </View>
      {renderDropdown()}
      <View
        style={styles.cardsContainer}
      >
        {isLoadingData === true ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ): errorData != null ? (
          <Text>error: {errorData}</Text>
        ) : (
          data?.map((item) => (
            <NearbyBusinessCard
              item={item}
              navigation={navigation}
            />
          ))
        )}
      </View>

    </View>
  )
}

export default NearbyBusiness