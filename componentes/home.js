import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.titulo}>Os Melhores Chocolates</Text>
      <StatusBar style="auto" />

      <TouchableOpacity onpress={()=>{props.navigation.navigate('Lacreme')}}>
      <View style={styles.blocos}>
          <Image style={styles.choco}
          source={require('../assets/lacreme.png')}/>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onpress={()=>{props.navigation.navigate('Copenhague')}}>
      <View style={styles.blocos}>
          <Image style={styles.choco}
          source={require('../assets/copenhague.png')}/>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onpress={()=>{props.navigation.navigate('Lollo')}}>
      <View style={styles.blocos}>
          <Image style={styles.choco}
          source={require('../assets/lollo.png')}/>
      </View>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7b3614',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:
  {
    fontSize: 30,
    fontWeight: 'bold',
    color:'#470b0a',
    marginVertical: 40,
  },
  blocos:
  {
    height: 400,
    backgroundColor:'#271618',
    borderRadius: 50,
    alignItems:'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  choco:
  {
    width: 350,
    height: 300,
  }
});
