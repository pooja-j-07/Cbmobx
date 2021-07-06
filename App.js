import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/Home';
import DisplayList from './components/DisplayList';

const App = () => {
  return (
    <Router>
      <Scene  key="root" hideNavBar>
      <Scene key="Home"  component={Home}  initial/>
      <Scene key="DisplayList" component={DisplayList}/>
      </Scene>
    </Router>
  );
};
export default App;
