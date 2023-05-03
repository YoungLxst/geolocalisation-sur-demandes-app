import { 
  View, 
  SafeAreaView,
  ScrollView
} from 'react-native'

import { icons, COLORS, SIZES } from '../../constants'
import { ScreenHeader } from '../index'
import Company from './company/Company'
import BusinessTabs from './businessTabs/BusinessTabs'

const Second = ({route, navigation}) => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: COLORS.lightWhite
      },
      title: '',
      headerShadowVisible: false,  
      headerLeft: () => (
            <ScreenHeader 
                iconUrl={icons.arrowLeft}
                handlePress={() =>{navigation.pop()}}
            />
        ),
    headerRight: () => (
      <ScreenHeader
        iconUrl={icons.share}
        handlePress={() => {}}
      />
    )
    });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            padding: SIZES.medium,
            paddingBottom: 100
          }}
        >
          <Company 
            data={route.params.data}
          />

          <BusinessTabs 
            data={route.params.data}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default Second