import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Platform,
  StatusBar,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import axios from 'axios';

export default class DailyPic extends React.Component {
  constructor() {
    super();
    this.state = {
      apod: '',
    };
  }
  getApod = async () => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=bdLEAZHoyGhXXKgV8aHa97izMkOhh7rBIYN7Uq1c'
      )
      .then((response) => {
        this.setState({ apod: response.data });
      });
  };
  componentDidMount() {
    this.getApod();
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.driodsafe} />
        <ImageBackground
          source={require('../assets/stars.gif')}
          style={styles.backgroundImg}>
          <Text style={{ color: 'white', fontFamily: 'bold' }}>
            Astromony Picture Of The Day
          </Text>
          <Text style={{ color: 'white', fontFamily: 'bold' }}>
            {this.state.apod.title}
          </Text>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL(this.state.apod.url).catch((err) =>
                console.error("Couldn't Load Page", err)
              )
            }>
            <View style={styles.itemContainer}>
              <Image
                source={require('../assets/play-video.png')}
                style={{ width: 50, height: 50 }}>
              </Image>
            </View>
          </TouchableOpacity>
          <Text style={styles.explanationText}>
            {this.state.apod.explanation}
          </Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  driodsafe: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImg: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
  },
  explanationText:{
    color:"white",
    fontFamily:"bold",
    fontSize:20
  }
});
