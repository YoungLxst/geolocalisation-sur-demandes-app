import { View, Text } from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

import styles from './map.style'

const Map = () => {
  return (
    <View
      style={styles.container}
    >
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
      />
    </View>
  )
}

export default Map