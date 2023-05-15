import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
  dropdownContainer: {
    height: 40,
    width: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tabsContainer: {
    alignItems: "center",
    width: "100%",
    marginTop: SIZES.medium,
    backgroundColor : COLORS.lightWhite,
    height: 50,
    padding: 5,
    borderRadius: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.small,
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: activeJobType === item ? COLORS.primary : COLORS.lightWhite,
    borderColor: COLORS.primary,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.lightWhite : COLORS.primary,
  }),
});

export default styles;