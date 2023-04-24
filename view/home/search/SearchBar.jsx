import { useState } from 'react'
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'

import styles from './shearchBar.style'

import { icons, SIZES } from '../../../constants'

const types = ["restaurant", "cafe", "bar", "hotel", "shopping", "museum", "event", "park", "gym", "spa"]

const SearchBar = ({ navigation }) => {

  const [activeType, setActivateType] = useState(null)

  return (
    <View>
      <View
        style={styles.container}
      >
        {/*}
        <Button
            title="Go to Second"
            onPress={() => navigation.navigate('Second')}
        />
        */}
        <Text
          style={styles.userName}
        >
          Hello username
        </Text>
        <Text
          style={styles.welcomeMessage}
        >
          Find a place to eat, drink, shop or relax
        </Text>
      </View>

      <View
        style={styles.searchContainer}
      >
        <View
          style={styles.searchWrapper}
        >
          <TextInput
            style={styles.searchInput}
            placeholder="what are you looking for?"
            onChange={(val) => { }}
          />
        </View>
        <TouchableOpacity
          style={styles.searchBtn}
        >
          <Image
            source={icons.search}
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View
        style={styles.tabsContainer}
      >
        <FlatList
          data={types}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeType, item)}
              onPress={() => {
                setActivateType(item)
              }}
            >
              <Text
                style={styles.tabText(activeType, item)}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.xSmall}}
          horizontal
        />
      </View>
    </View>
  )
}

export default SearchBar