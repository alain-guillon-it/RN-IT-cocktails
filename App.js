import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CocktailList from "./components/CocktailList";
import CocktailDetails from "./components/CocktailDetails";

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
        <Tab.Navigator>
            <Tab.Screen name="Home" component={CocktailList} />
            <Tab.Screen name="Détails" component={CocktailDetails} />
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
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
