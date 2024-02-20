import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Icon } from 'react-native-elements'


export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{padding:20, fontSize:50,fontWeight:'800' }}>
          Home
        </Text>
      </View>
      <View style={styles.icons} >
        <View>
<Icon name='message' style={{backgroundColor:'white',borderRadius:100, padding:25, }}/>
<Text style={{fontWeight:'500' }}>
  Price Alert
</Text>
</View>
 <View>
<Icon name='message' style={{backgroundColor:'white', borderRadius:100, padding:25,}}/>
<Text style={{fontWeight:'500' }}>
Convert
</Text>
</View>
 <View>
<Icon name='message' style={{backgroundColor:'white',borderRadius:100, padding:25,}}/> 
<Text style={{fontWeight:'500' }}>
Compare
</Text>
</View>
 <View>
<Icon name='message'style={{backgroundColor:'white',borderRadius:100, padding:25,}}/> 
<Text style={{fontWeight:'500' }}>
Watchlist
</Text>
</View>
<StatusBar style="auto" />
      </View>
      <View style={{borderRadius:'10' }} >
        <Text style={{fontSize:'10', FontWeight:'500',padding:'20'}} >
          your Wallet
        </Text>
        <View style={{borderRadius:'10' }}>
          <Text>
           Neo
          </Text>
           <Text>
            NEO 0.2124
          </Text>
           <Text>
            $32,128.80
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
     paddingTop:'80',
    
  },
  icons:{

    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    justifyContent:'space-around',
    backgroundColor:'#ffe6e6',
  },
});
