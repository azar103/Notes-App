import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AddNote from './screens/AddNote';
import EditNote from './screens/EditNote';
import Home from './screens/Home';
import NoteDetail from './screens/NoteDetail';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import reduxStore from './Store/store';
import Categories from './screens/Categories';
import Search from './screens/Search';
const Stack = createStackNavigator();
const App = () => {
  const {persistor, store} = reduxStore();
  const Navigatores = () => (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: {
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
        <Stack.Screen name="NoteDetail" component={NoteDetail} />
        <Stack.Screen name="EditNote" component={EditNote} />
        <Stack.Screen name="AddNote" component={AddNote} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {Navigatores()}
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
