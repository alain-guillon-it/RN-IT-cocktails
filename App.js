import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, AntDesign, Fontisto } from "@expo/vector-icons";

import CocktailList from "./components/CocktailList";
import Profile from "./components/Profile";
import Favorite from "./components/Favorite";

/*
function FavoriteScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Favoris ma gueule</Text>
            <Button
                title="Go to Home Page"
                onPress={() => navigation.navigate('home')}
            />

        </View>
    );
}*/

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="favorite" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={CocktailList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="cocktail" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="profile" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
      {/*<Stack.Screen name="home" component={HomeScreen} options={{ title: "Cocktails IT", headerStyle: { backgroundColor: 'papayawhip' }}} />
            <Stack.Screen name="favorite" component={FavoriteScreen} options={{ title: "Favorite IT", headerStyle: { backgroundColor: 'salmon'  } }} />*/}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
});
