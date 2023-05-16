import { View, Text, Dimensions } from 'react-native'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import styles from './map.style'
import Rate from '../../common/rate/Rate'
//import useFetchLocation from '../../../hook/fetchLocation'

const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.02
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO


const Map = ({ navigation, data, locationIsLoading, error, location}) => {
  //const { location, error, locationIsLoading, refetchLocation } = useFetchLocation()

  return ( 
    <View
      style={styles.container}
    //onPress={() => navigation.navigate('Map')}
    >
      <MapView
        initialRegion={locationIsLoading ? null : error ? null : {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
      >
        {locationIsLoading ? null : error ? null : (
          <Marker
            coordinate={{ 
              latitude: location.latitude,
              longitude: location.longitude
            }}
            title="votre position"
            pinColor='blue'
          />
        )}
        {data?.map((item) => (
          <Marker
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude
            }}
            title={item.name}
          >
            <Callout 
            tooltip
            onPress={() => navigation.navigate('Second', {data: item
            })}
            >
                <View
                  style={styles.calloutContainer}>
                  <Text>
                    {item.name}
                  </Text>
                  <Rate
                    rate={item.rating}
                  />
                </View>
            </Callout>
          </Marker>
        ))}  
      </MapView>
    </View>
  )
}

export default Map