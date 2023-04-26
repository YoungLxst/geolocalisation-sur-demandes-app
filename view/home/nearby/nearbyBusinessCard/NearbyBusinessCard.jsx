import { 
  View, 
  Text ,
  TouchableOpacity
} from 'react-native'

import styles from './nearbyBusinessCard.style'
import { Rate } from '../../../index'

const NearbyBusinessCard = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Second', {data: item
      })}
    >
      <View
        style={styles.textContainer}

      >
        <Text
          style={styles.jobName}
        >
          {item.name}
        </Text>
        <View
          style={styles.infoContainer}
        >
          <Text
          style={styles.jobType}
          numberOfLines={1}
        >
          {item.type}
        </Text>
        <Rate 
          rate={item.rating}
        />
        </View>
        
      </View>
    </TouchableOpacity>
  )
}

export default NearbyBusinessCard