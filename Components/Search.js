import React from 'react'
import {StyleSheet, View, TextInput, Button, FlatList, Text} from 'react-native'
import FilmItem from "./FilmItem"
import filmsData from "../Helpers/filmsData"

export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <TextInput placeholder="Titre du film" style={styles.textInput}/>
        <Button title="Rechercher" style={styles.button} onPress={() => {}}/>
        <FlatList
          data={filmsData}
          keyExtractor={(item) => item.id.toString() }
          renderItem={({item}) => <FilmItem/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: 20,
    flex: 1
  },
  textInput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  button: {
    height: 50
  }
})
