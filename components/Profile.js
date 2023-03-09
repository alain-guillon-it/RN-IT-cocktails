import { Image, StyleSheet, Text, View, Dimensions } from "react-native";

function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Alain GUILLON</Text>
        <Text style={styles.PropTypes.array.isRequired}>
          Il faut persévérer pour arriver au bout des choses
        </Text>
      </View>

      <View style={styles.main}>
        <Image
          source={{
            uri: "https://images.assetsdelivery.com/compings_v2/drawkman/drawkman2007/drawkman200700312.jpg",
          }}
          style={{
            height: Dimensions.get("window").height * 0.3,
            width: Dimensions.get("window").width * 0.75,
          }}
        />
      </View>

      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  h1: {
    fontSize: 32,
  },
  p: {
    letterSpacing: 2,
    fontStyle: "italic",
  },
  main: {
    flex: 0.4,
    backgroundColor: "brown",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 0.4,
    backgroundColor: "orange",
  },
});
