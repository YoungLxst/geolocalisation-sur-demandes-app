import { StyleSheet } from "react-native"

import { COLORS, SHADOWS, SIZES } from "../../../../constants"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logImage: {
    width: "70%",
    height: "70%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium
  },
  jobName: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.primary,
  },
  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
    maxWidth: "77%",
    marginRight: 5,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
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
  starInactive:{
    content: '',
    width: 10,
    height: 10,
    backgroundColor: COLORS.gray,
    borderRadius: 5,
    marginRight: 3,
  },
  rateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
})

export default styles