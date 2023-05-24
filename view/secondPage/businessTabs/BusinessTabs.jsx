import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

import styles from './businessTabs.style'
import { icons } from '../../../constants'
import { JSONconvert } from '../..'

const BusinessTabs = ({ navigation, data }) => {

  /**
   * Get next hours
   * @returns 
   */
  function openOrClosed() {
    const date = new Date()
    const day = date.getDay()
    let state = false

    switch (day) {
      case 1:
        checkIfOpen(data.working_hours.Monday) ? state = true : state = false
        break;
      case 2:
        checkIfOpen(data.working_hours.Tuesday) ? state = true : state = false
        break;
      case 3:
        checkIfOpen(data.working_hours.Wednesday) ? state = true : state = false
        break;
      case 4:
        checkIfOpen(data.working_hours.Thursday) ? state = true : state = false
        break;
      case 5:
        checkIfOpen(data.working_hours.Friday) ? state = true : state = false
        break;
      case 6:
        checkIfOpen(data.working_hours.Saturday) ? state = true : state = false
        break;
      case 7:
        checkIfOpen(data.working_hours.Sunday) ? state = true : state = false
        break;
    }


    if (state) {
      return (
        <View
          style={styles.planningContainer}
        >
          <Text
            style={styles.open}
          >
            ouvert
          </Text>
          <Text
            style={styles.nextHours}
          >
            . {getNextHours(type = 1)}
          </Text>
        </View>
      )
    } else {
      return (
        <View
          style={styles.planningContainer}
        >
          <Text
            style={styles.closed}
          >
            fermé
          </Text>
          <Text
            style={styles.nextHours}
          >
            . {getNextHours(type = 0)}
          </Text>
        </View>
      )
    }
  }

  function checkIfOpen(time) {
    const date = new Date()
    const hour = date.getHours()
    const minutes = date.getMinutes()

    const timeJSON = convertTimeArrayToJSON(time)

    if (timeJSON.time[0] === undefined) {
      return false
    }

    for (let i = 0; i < timeJSON.time.length; i++) {
      if (hour >= timeJSON.time[i].startHour && hour <= timeJSON.time[i].endHour) {
        if ((hour === timeJSON.time[i].startHour && minutes > timeJSON.time[i].startMinute) || (hour === timeJSON.time[i].endHour && minutes < timeJSON.time[i].endMinute) || (hour !== timeJSON.time[i].startHour && hour !== timeJSON.time[i].endHour)) {
          return true
        }
      }
    }

    return false
  }


  /**
   * Convert time array to JSON
   *  */
  function convertTimeArrayToJSON(timeArray) {
    const json = {
      time: []
    };
    if (timeArray[0] === 'Closed') {
      return json
    }

    timeArray.forEach((timeString) => {
      const [startString, endString] = timeString.split('–');

      let [startHour, startMinute] = startString.trim().split(':');
      startHour = parseInt(startHour);
      startMinute = parseInt(startMinute) || 0;
      if ((startString.includes('PM') && startHour !== 12) || (!startString.includes('AM') && !startString.includes('PM') && endString.includes('PM') && startHour !== 12)) {
        startHour += 12;
      }

      let [endHour, endMinute] = endString.trim().split(':');
      endHour = parseInt(endHour);
      endMinute = parseInt(endMinute) || 0;
      if (endString.includes('PM') && endHour !== 12) {
        endHour += 12;
      }

      json.time.push({
        startHour,
        startMinute,
        endHour,
        endMinute,
      });
    });
    return json;
  }

  function getNextHours(type) {
    const date = new Date()
    let day = date.getDay()
    const hour = date.getHours()
    if (type === 1) {
      var time
      switch (day) {
        case 1:
          time = convertTimeArrayToJSON(data.working_hours.Monday)
          break
        case 2:
          time = convertTimeArrayToJSON(data.working_hours.Tuesday)
          break
        case 3:
          time = convertTimeArrayToJSON(data.working_hours.Wednesday)
          break
        case 4:
          time = convertTimeArrayToJSON(data.working_hours.Thursday)
          break
        case 5:
          time = convertTimeArrayToJSON(data.working_hours.Friday)
          break
        case 6:
          time = convertTimeArrayToJSON(data.working_hours.Saturday)
          break
        case 7:
          time = convertTimeArrayToJSON(data.working_hours.Sunday)
          break
      }

      for (let i = 0; i < time.time.length; i++) {
        if (hour >= time.time[i].startHour && hour <= time.time[i].endHour) {
          return ` jusqu'a ${time.time[i].endHour} : ${time.time[i].endMinute === 0 ? '00' : time.time[i].endMinute} `
        }
      }
    }
    else {
      let i = 0
      let item
      let dayFound
      day === 7 ? day = 1 : day++
      while (i < 10) {
        switch (day) {
          case 1:
            if (convertTimeArrayToJSON(data.working_hours.Monday).time[0] !== undefined) {
              item = data.working_hours.Monday
              dayFound = 1
              i = 10
            }
            break
          case 2:
            if (convertTimeArrayToJSON(data.working_hours.Tuesday).time[0] !== undefined) {
              item = data.working_hours.Tuesday
              dayFound = 2
              i = 10
            }
            break
          case 3:
            if (convertTimeArrayToJSON(data.working_hours.Wednesday).time[0] !== undefined) {
              item = data.working_hours.Wednesday
              dayFound = 3
              i = 10
            }
            break
          case 4:
            if (convertTimeArrayToJSON(data.working_hours.Thursday).time[0] !== undefined) {
              item = data.working_hours.Thursday
              dayFound = 4
              i = 10
            }
            break
          case 5:
            if (convertTimeArrayToJSON(data.working_hours.Friday).time[0] !== undefined) {
              item = data.working_hours.Friday
              dayFound = 5
              i = 10
            }
            break
          case 6:
            if (convertTimeArrayToJSON(data.working_hours.Saturday).time[0] !== undefined) {
              item = data.working_hours.Saturday
              dayFound = 6
              i = 10
            }
            break
          case 7:
            if (convertTimeArrayToJSON(data.working_hours.Sunday).time[0] !== undefined) {
              item = data.working_hours.Sunday
              dayFound = 7
              i = 10
            }
            break
        }
        day === 7 ? day = 1 : day++
        i++
      }
      if (item != undefined) {
        const time = convertTimeArrayToJSON(item)
        let dayString
        switch (dayFound) {
          case 1:
            dayString = 'Lun'
            break
          case 2:
            dayString = 'Mar'
            break
          case 3:
            dayString = 'Mer'
            break
          case 4:
            dayString = 'Jeu'
            break
          case 5:
            dayString = 'Ven'
            break
          case 6:
            dayString = 'Sam'
            break
          case 7:
            dayString = 'Dim'
            break
        }
        return ` Ouvert ${dayString} ${time.time[0].startHour} : ${time.time[0].startMinute === 0 ? '00' : time.time[0].startMinute}`

      }
    }
  }

  convertPlaning = () => {
    let planing = []
    let i = 1
    let tmp

    for (i; i <= 7; i++) {
      let day = ''
      switch (i) {
        case 1:
          day = 'Monday'
          tmp = convertTimeArrayToJSON(data.working_hours.Monday)
          break
        case 2:
          day = 'Tuesday'
          tmp = convertTimeArrayToJSON(data.working_hours.Tuesday)
          break
        case 3:
          day = 'Wednesday'
          tmp = convertTimeArrayToJSON(data.working_hours.Wednesday)
          break
        case 4:
          day = 'Thursday'
          tmp = convertTimeArrayToJSON(data.working_hours.Thursday)
          break
        case 5:
          day = 'Friday'
          tmp = convertTimeArrayToJSON(data.working_hours.Friday)
          break
        case 6:
          day = 'Saturday'
          tmp = convertTimeArrayToJSON(data.working_hours.Saturday)
          break
        case 7:
          day = 'Sunday'
          tmp = convertTimeArrayToJSON(data.working_hours.Sunday)
          break
      }
      planing.push(tmp)

    }

    return planing
  }

  data.working_hours != null ? convertPlaning() : null

  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.tabBox}
        onPress={() => { }}
      >
        <Image
          source={icons.location}
          style={styles.icon(40)}
        />
        <Text
          style={styles.info}
        >
          {data.full_address}
        </Text>
      </TouchableOpacity>
      {data.working_hours != null ? (
        <TouchableOpacity
          style={styles.tabBox}
          onPress={() => navigation.navigate('Planing', { data: convertPlaning() })}
        >
          <Image
            source={icons.time}
            style={styles.icon(30)}
          />
          {openOrClosed()}
          <Image
            source={icons.arrowRight}
            style={styles.arrow}
          />
        </TouchableOpacity>
      ) : (
        <View
        style={styles.tabBox}
      >
        <Image
          source={icons.time}
          style={styles.icon(30)}
        />
        <Text
          style={styles.info}
        >
          Horaires non renseignés
        </Text>
      </View>
        )}

      <TouchableOpacity
        style={styles.tabBox}
        onPress={() => { }}
      >
        <Image
          source={icons.call}
          style={styles.icon(25)}
        />
        <Text
          style={styles.info}
        >
          {data.phone_number != null ? data.phone_number : 'Numéro non renseigné'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BusinessTabs