import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function Lollo() 
{
    return(
        <View style={styles.container}>
        <View style={styles.blocos}>
          <Image style={styles.choco}
          source={require('../assets/lacreme.png')}/>
      </View>
      <Text></Text>
      </View>
    )
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