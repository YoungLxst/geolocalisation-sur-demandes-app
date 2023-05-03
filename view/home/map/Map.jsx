import { View, TouchableOpacity, Dimensions } from 'react-native'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
//import Geolocation from '@react-native-community/geolocation'

import styles from './map.style'

const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.02
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO


const Map = ({navigation}) => {
  /*const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  })

  useEffect(() => {
    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    }).catch((err) => {
      console.log(err);
    });
  }, []);
*/
  return (
    <View
      style={styles.container}
      //onPress={() => navigation.navigate('Map')}
    >
      <MapView
        scrollEnabled={true}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation={true} 
      >
        <Marker 
          coordinate={{
            latitude: 48.8534,
            longitude: 2.3488
          }}
          title="Paris"
          description="La ville lumière"
        />
      </MapView>
    </View>
  )
}

export default Map