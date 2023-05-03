import { 
    View, 
    Text,
    SafeAreaView,
    ScrollView
} from 'react-native'

import { ScreenHeader } from '../index' 

import { icons, SIZES, COLORS } from '../../constants'
import styles from './planing.style'

const Planing = ({route, navigation}) => {

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
      })

    const planingData = route.params.data

    getHour = (day) => {
        if(planingData[day].time.length === 0){
            return(
                <Text
                    style={styles.hourText}
                >
                    Fermé
                </Text>            )
        }else if(planingData[day].time.length === 1){
            return(
                <Text
                    style={styles.hourText}
                >
                    {roundIt(planingData[day].time[0].startHour)}:{roundIt(planingData[day].time[0].startMinute)} - {roundIt(planingData[day].time[0].endHour)}:{roundIt(planingData[day].time[0].endMinute)}
                </Text>
            )
        }else{
            return(
                <>
                <Text
                    style={styles.hourText}
                >
                    {roundIt(planingData[day].time[0].startHour)}:{roundIt(planingData[day].time[0].startMinute)} - {roundIt(planingData[day].time[0].endHour)}:{roundIt(planingData[day].time[0].endMinute)}
                </Text>
                <Text
                style={styles.hourText}
            >
                {roundIt(planingData[day].time[1].startHour)}:{roundIt(planingData[day].time[1].startMinute)} - {roundIt(planingData[day].time[1].endHour)}:{roundIt(planingData[day].time[1].endMinute)}
            </Text>
            </>
            )
        }
    }

    roundIt = (number) => {
        if(number < 10){
            return "0" + number
        }else{
            return number
        }
    }

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
        <View
            style={styles.planingContainer}
        >
            <View
                style={styles.dayContainer}
            >
                <Text
                    style={styles.dayText}
                >
                    Lundi
                </Text>
            </View>
            <View
                style={styles.hourContainer}
            >
                {getHour(0)}
            </View>
        </View>
        <View
            style={styles.planingContainer}
        >
            <View
                style={styles.dayContainer}
            >
                <Text
                    style={styles.dayText}
                >
                    Mardi
                </Text>
            </View>
            <View
                style={styles.hourContainer}
            >
                {getHour(1)}
            </View>
        </View>
        <View
            style={styles.planingContainer}
        >
            <View
                style={styles.dayContainer}
            >
                <Text
                    style={styles.dayText}
                >
                    Mercredi
                </Text>
            </View>
            <View
                style={styles.hourContainer}
            >
                {getHour(2)}
            </View>
        </View>
        <View
            style={styles.planingContainer}
        >
            <View
                style={styles.dayContainer}
            >
                <Text
                    style={styles.dayText}
                >
                    Jeudi
                </Text>
            </View>
            <View
                style={styles.hourContainer}
            >
                {getHour(3)}
            </View>
        </View>
        <View
            style={styles.planingContainer}
        >
            <View
                style={styles.dayContainer}
            >
                <Text
                    style={styles.dayText}
                >
                    Vendredi
                </Text>
            </View>
            <View
                style={styles.hourContainer}
            >
                {getHour(4)}
            </View>
        </View>
        <View
            style={styles.planingContainer}
        >
            <View
                style={styles.dayContainer}
            >
                <Text
                    style={styles.dayText}
                >
                    Samedi
                </Text>
            </View>
            <View
                style={styles.hourContainer}
            >
                {getHour(5)}
            </View>
        </View>
        <View
            style={styles.planingContainer}
        >
            <View
                style={styles.dayContainer}
            >
                <Text
                    style={styles.dayText}
                >
                    Dimanche
                </Text>
            </View>
            <View
                style={styles.hourContainer}
            >
                {getHour(6)}
            </View>
        </View>

    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Planing