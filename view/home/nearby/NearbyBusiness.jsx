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

const NearbyBusiness = ({ navigation, data }) => {

  const [visible, setVisible] = useState(false)
  const [activeType, setActivateType] = useState(null)

  const toggleDropdown = () => {
    setVisible(!visible)
  }

  const isLoading = false
  const error = false
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
          contentContainerStyle={{columnGap: SIZES.xSmall}}
          horizontal
        />
      </View>
      )
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
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>error</Text>
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