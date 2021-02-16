import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView} />
      <View style={styles.blueView} />
      <Text>Hello!!@!!</Text>
      <StatusBar style="auto" />
    </View>
  );
  //컨테이너는 아버지 역할이고 yellow와 blue는 자식 느낌임
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 모든 공간이 사용 가능하다.
    //flex 레이아웃 의 초기상태는 세로형식임. 설정으로 바꿀 수 있음. flexDirection 으로 
    //flex 값이 클 수록 레이아웃에서 더 많은 공간을 차지함
  },
  yellowView: {
    flex: 1,
    backgroundColor: "yellow"
  },
  blueView: {
    flex: 1,
    backgroundColor: "blue"
  }
  
});
