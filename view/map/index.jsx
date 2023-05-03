import { View, Text } from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

import { ScreenHeader } from '../index'

import { icons, COLORS, SIZES} from '../../constants'

const Map = ({navigation}) => {
    navigation.setOptions({
        headerStyle: {
          backgroundColor: COLORS.lightWhite
        },
        title: '',
        headerShadowVisible: false,
        headerRight: () => (
          <ScreenHeader
            iconUrl={icons.menu}
            handlePress={() => {}}
          />
        ),
        headerLeft: () => (
            <ScreenHeader 
            iconUrl={icons.arrowLeft}
            handlePress={() =>{navigation.pop()}}
        />
        )
      })

  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
            width: '100%',
            height: '100%',
        }}
      />
    </View>
  )
}

export default Map