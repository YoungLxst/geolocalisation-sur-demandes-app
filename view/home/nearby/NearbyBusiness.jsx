import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

import styles from './nearbyBusiness.style'
import { COLORS } from '../../../constants'
import NearbyBusinessCard from './nearbyBusinessCard/NearbyBusinessCard'

const NearbyBusiness = ({ navigation, data }) => {

  const isLoading = false
  const error = false

  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.header}
      >
        <Text
          style={styles.headerTitle}
        >
          Nearby business
        </Text>
        <TouchableOpacity>
          <Text
            style={styles.headerBtn}
          >
            See all
          </Text>
        </TouchableOpacity>

      </View>
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