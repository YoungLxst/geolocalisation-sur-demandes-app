import { 
    View, 
    Text,
    Image
} from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'

const Company = ({data}) => {
    console.log('')
    return (
    <View
        style={styles.container}
    >
        <View
            style={styles.imageBox}
        >
            <Image
                source={{uri: data.photos_sample[0].photo_url}}
                style={styles.image}
            />
        </View>
        <View
            style={styles.businessTitleBox}
        >
            <Text
                style={styles.businessTitle}
            >
                {data.name}
            </Text>
        </View>
        <View
            style={styles.companyInfoBox}
        >
            <View
                style={styles.locationBox}
            >
                <Image
                    source={icons.location}
                    style={styles.locationImage}
                />
                <Text
                    style={styles.locationName}
                >
                    {data.full_address}
                </Text>
            </View>
        </View>
    </View>

  )
}

export default Company