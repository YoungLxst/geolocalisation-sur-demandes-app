import { TouchableOpacity, Image } from 'react-native'
import React from 'react'

import styles from './screenHeader.style'

const ScreenHeader = ({iconUrl, handlePress}) => {
  return (
    <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => {handlePress()}}
    >
      <Image
        source={iconUrl}
        style={styles.btnImg('60%')}
        resizeMode='cover'
      />
    </TouchableOpacity>
  )
}

export default ScreenHeader