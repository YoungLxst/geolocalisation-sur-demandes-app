import { 
    View, 
    Text,
    Image
} from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { Rate } from '../../index'

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
                {/*<Image
                    source={icons.location}
                    style={styles.locationImage}
                />
                <Text
                    style={styles.locationName}
                >
                    {data.full_address}
    </Text>*/}
                <Text
                    style={styles.locationName}
                >
                    {data.type}
                </Text>
                <View
                    style={styles.rateContainer}
                >
                    <Rate
                    rate={data.rating}
                />
                <Text
                    style={styles.rate}
                >
                    {data.rating}
                </Text>
                </View>
                
            </View>
        </View>
    </View>

  )
}

export default Company