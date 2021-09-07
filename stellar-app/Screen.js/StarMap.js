import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Platform,
  TextInput
} from 'react-native';
import axios from 'axios'
import {WebView} from 'react-native-webview'



const Path="https://virtualsky.lco.global/embed/index.html?longitude=70&latitude=70&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false"

export default class StarMap extends React.Component{

  constructor(){
    super();
    this.state={
      starMap:{},
      latitude:"",
      longitude:""
    }
  }
  
  
  
  
   
    

  
  
  render(){
    
      return (
        <View style={{flex:1}}>
        <SafeAreaView style={styles.safe} />
        <View>

        
        <TextInput
        style={styles.btn} 
        placeholder="Enter Your Latitude"
        onChangeText={(text)=>{
          this.setState({
            latitude:text
          })
        }}
        />
         <TextInput
        style={styles.btn} 
        placeholder="Enter Your Longitude"
        onChangeText={(text)=>{
          this.setState({
            longitude:text
          })
        }}
        />
        

        </View>
        <WebView
        scalesPageToFit={true}
        source={{uri:Path}}
        style={{marginTop:20,marginBottom:20}}
        />
      </View>
      )
    }
    
}
         
const styles = StyleSheet.create({
  safe: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  btn: {
    height:40,
    borderColor:"gray",
    borderWidth:1,
    backgroundColor: 'white',
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 30,
    alignItems: 'center',
  },
  
});

