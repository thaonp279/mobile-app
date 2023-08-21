import { StyleSheet } from "react-native";
export const GlobalStyle = StyleSheet.create({
  regularFont: {
    fontFamily: "Georgia",
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
