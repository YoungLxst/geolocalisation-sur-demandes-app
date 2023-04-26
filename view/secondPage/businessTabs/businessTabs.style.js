import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
    container: {
        marginVertical: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight:65,
        width: '90%',
        backgroundColor: "#FFF",
        borderRadius: SIZES.xxLarge,
        marginBottom: SIZES.medium,
    },
    icon: (val) => ({
        width: val,
        height: val,
        marginRight: 5,
        tintColor: COLORS.tertiary,
    }),
    info :{
        width: '80%',
        fontSize: SIZES.medium - 2,
        color: COLORS.primary,
        fontFamily: FONT.medium,
        textAlign:'center'
    },
    planningContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
    },
    closed: {
        fontSize: SIZES.medium,
        color: 'red',
        fontFamily: FONT.bold,
    },
    open: {
        fontSize: SIZES.medium,
        color: 'green',
        fontFamily: FONT.bold,
    },
    nextHours: {
        fontSize: SIZES.medium-2,
        color: COLORS.primary,
        fontFamily: FONT.medium,
        paddingLeft: 5,
    },
    arrow: {
        width: 40,
        height: 40,
        tintColor: COLORS.tertiary,
        position: 'absolute',
        right: '0%',
    },
})

export default styles