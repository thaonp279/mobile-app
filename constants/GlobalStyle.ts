import { StyleSheet } from "react-native";
export const GlobalStyle = StyleSheet.create({
  regularFont: {
    fontFamily: 'Montserrat_400Regular',
  },
  page: {
    backgroundColor: "white",
    padding: 25,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  blogImage: {
    width: "100%",
    height: 200,
    objectFit: "contain",
  },
});

export const GlobalText = StyleSheet.create({
  tiny: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 11
  },
  regular : {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 13,
  },
  bold: {
    fontFamily: 'Montserrat_700Bold'
  },
  h3: {
    fontSize: 30,
    fontFamily: "CrimsonPro_200ExtraLight",
  }
})