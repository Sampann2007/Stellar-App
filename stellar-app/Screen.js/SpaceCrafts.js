import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import axios from 'axios';

export default class SpaceCraft extends React.Component {
  constructor() {
    super();
    this.state = {
      spaceArcraft:"",
    };
  }

  getcraft = async () => {
    axios
      .get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/')
      .then((response) => {
        this.setState({spaceArcraft: response.data.results });
      })
      .catch((error) => {error.message});
  };
  componentDidMount() {
    this.getcraft();
  }
  renderItem = ({ item }) => {
    return (
      <View
        style={{
          borderWidth: 1,
          justifyContent: 'center',
          alignContent: 'center',
          marginBottom: 10,
          elevation: 10,
        }}>
        <Image
          source={{ uri: item.agency.image_url }}
          style={{
            width: '100%',
            height: 200,
            marginTop: 15,
            marginBottom: 15,
            marginRight: 10,
          }}></Image>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text>
        <Text style={{ color: '#696969' }}>{item.agency.name}</Text>
        <Text>Description</Text>
        <Text style={{ color: '#A9A9A9', marginLeft: 10, marginRight: 10 }}>
          {item.agency.description}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{ flex: 0.25 }}>
          <Text style={{alignItems:"center",justifyContent:"center",fontFamily:"bold",marginTop:50,alignSelf:"center",fontSize:40,color:"blue"}}>Space Craft</Text>
        </View>
          <FlatList
            keyExtractor={(item, index) => {
              index.toString();
            }}
            data={this.state.spaceArcraft}
            renderItem={this.renderItem}
          />
      </View>
    );
  }
}
