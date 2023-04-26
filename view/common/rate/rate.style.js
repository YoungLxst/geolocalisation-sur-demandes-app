import { StyleSheet } from 'react-native'
import { COLORS } from '../../../constants'

const styles = StyleSheet.create({
    star:{
        content: '',
        width: 10,
        height: 10,
        backgroundColor: COLORS.gray,
        borderRadius: 5,
        marginRight: 3,
        overflow: "hidden",
      },
      starActive:(rate) => ({
        content: '',
        width: 10,
        height: 10,
        backgroundColor: COLORS.tertiary,
        width: `${rate * 100}%`
      }),
      rateContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
})

export default styles;