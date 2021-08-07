import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  Button,
} from "react-native";
import BanglaClassObservationScreen from "./components/BanglaClassObservationScreen";
import HomeScreen from "./components/HomeScreen";

export default class App extends Component {
  render() {
    return <BanglaClassObservationScreen />;
  }
}
