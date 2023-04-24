import { 
  View, 
  Text ,
  TouchableOpacity
} from 'react-native'

import styles from './nearbyBusinessCard.style'

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

const Rate = (rate) => {

  const roundRate = Math.floor(rate.rate)
  const decimalRate = rate.rate - roundRate 
  
  const renderRate = (index, decimalRate) => {

    let starStyle = null

    if (index < Math.floor(rate.rate)) {  
      starStyle = styles.starActive(1)
    } else if (index === Math.floor(rate.rate) && decimalRate > 0) {
      starStyle = styles.starActive(decimalRate)
    } else {
      starStyle = styles.starActive(0)
    }

    return (
      <View style={styles.star}>
        <View style={starStyle}/>
      </View>
    )
  }

  return (
    <View
      style={styles.rateContainer}
    >
      {Array.from({length: 5}, (_, index) => renderRate(index, decimalRate))}
    </View>
  )
}

export default NearbyBusinessCard