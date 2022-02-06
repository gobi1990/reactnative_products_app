import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View ,FlatList , SafeAreaView  } from 'react-native';
 
class App extends Component { 
   
  constructor() { 
    super()
    this.state = {
      data : []
    }
  }

  componentDidMount() { 
    this.apiCall();
  }

  async apiCall() { 
    let res = await fetch('https://mocki.io/v1/909d1fae-9b2c-4823-97d5-329fd4c3ea5b');
    let resJson = await res.json();
   // console.warn(resJson)
    this.setState({
      data: resJson.users
    });
  }

  

  

  render() { 
    return (
      <SafeAreaView style={styles.screen}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => { 
            <ItemBox title={item.city} /> 
           
          } }
          keyExtractor={(item, index) => index.toString()}
        />
        
      </SafeAreaView>
    )
  }

}



export default App;

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listText: {
    padding: 10,
    fontSize: 20,
   color: 'black',
    margin: 10,
    backgroundColor: 'green'
   
  },
  listContainer: {
    backgroundColor: 'blue'
  }
});

const ItemBox = ({ title }) => (
  <View style={styles.listContainer}>
     <Text style={styles.listText}>{title}</Text>
  </View>
 );
