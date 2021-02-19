
import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from 'react-native';

export default class extends React.Component {3
  state = {
    isLoading: true
  }
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}
    } = await Location.getCurrentPositionAsync();
    this.setState({isLoading: false});
      // API로 보내서 날씨 정보를 받아올거다
      console.log(location);
    }
    catch(error){
      Alert.alert("Can't find you.", "So sad")
    }

  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading} = this.state;
   return isLoading? <Loading />: null;
  }
}

