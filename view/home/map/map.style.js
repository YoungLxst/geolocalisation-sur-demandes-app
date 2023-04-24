import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        backgroundColor: COLORS.gray2,
        borderRadius: SIZES.xLarge,
        marginTop: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    map: {
        width: '100%',
        height: '100%',
    }
})

export default styles