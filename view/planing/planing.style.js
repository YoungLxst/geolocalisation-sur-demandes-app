import { StyleSheet } from 'react-native'
import { COLORS, SIZES, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
    planingContainer: {
        
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: SIZES.medium,
    },
    dayContainer: {
        alignItems: "center",
        marginRight: 10,
        width: 100,
    },
    hourContainer: {
        alignItems: "center",
        width: 100,
    },
    dayText: {
        fontSize: SIZES.large,
        fontFamily: "DMBold",
        color: COLORS.primary,
    },
    hourText: {
        fontSize: SIZES.medium,
        fontFamily: "DMBold",
        color: COLORS.secondary,
    },

})

export default styles