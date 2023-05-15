import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native'
import {useState} from 'react'

import styles from './dropdown.style'

const Dropdown = ({label}) => {

  const [visible, setVisible] = useState(false)

  const toggleDropdown = () => {
    setVisible(!visible)
  }

  const renderDropdown = () => {
    const data = ['note', 'distance', 'popularité']

    if (visible) {
      return (
        <Modal 
          visible={visible}
          animationType='fade'
        >
          <TouchableOpacity>
            <View>
              <FlatList
                data={data}
                renderItem={({item}) => (
                  <TouchableOpacity>
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      )
    }
  }

  return (
    <View>

      <TouchableOpacity
        onPress={toggleDropdown}
        styles={styles.container}
      >
        <Text>{label}</Text>
        <Text>▼</Text>
      </TouchableOpacity>
        {renderDropdown()}
    </View>
  )
}

export default Dropdown