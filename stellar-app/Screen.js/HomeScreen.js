import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image,ImageBackground,SafeAreaView,StatusBar,Platform } from 'react-native';


export default class HomeScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <SafeAreaView style={styles.safe}/>
      <ImageBackground style={styles.bg} source={require("../assets/space.gif")}>
      <View style={styles.titleV}>
      <Text style={styles.titleTxt}>STELLAR APP</Text>
      </View>


      <TouchableOpacity style={styles.btn} 

      onPress={()=>{this.props.navigation.navigate("StarMap")}}>
      <Image style={styles.imgIcon} source={require("../assets/star_map.png")}></Image>
       <Text>StarMap</Text>

      </TouchableOpacity>


      <TouchableOpacity style={styles.btn}

       onPress={()=>{this.props.navigation.navigate("SpaceCraft")}}>
        <Image style={styles.imgIcon} source={require("../assets/space_crafts.png")}></Image>
      <Text>SpaceCraft</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}
       onPress={()=>{this.props.navigation.navigate("DailyPic")}}>
       <Image style={styles.imgIcon} source={require("../assets/daily_pictures.png")}></Image>
      <Text>DailyPic</Text>
      </TouchableOpacity>
     


    </ImageBackground>
    </View>
    )
  }
}

const styles = StyleSheet.create({
   safe:{
    marginTop:Platform.OS==="android"? StatusBar.currentHeight:0
  },
  titleTxt:{
     color:"white",
    fontSize:30,
    fontWeight:"bold",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   safe:{
    marginTop:Platform.OS==="android"? StatusBar.currentHeight:0
  },
  bg:{
    width:"100%",
    flex:1,
    resizeMode:"cover"
  },
  btn:{
    backgroundColor:"white",
    height:100,
    marginTop:50,
    marginLeft:50,
    marginRight:50,
    borderRadius:30,
    alignItems:"center"
  },
  titleV:{
    justifyContent:"center",
    alignItems:"center"
  },
  imgIcon:{
    position:"absolute",
    width:50,
    height:100,
    top:10,
    resizeMode:"contain"
  }
});