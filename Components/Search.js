import React from 'react'
import {StyleSheet, View, TextInput, Button, FlatList, ActivityIndicator} from 'react-native'
import FilmItem from "./FilmItem"
import TMDB from "../Helpers/TMDB"

export default class Search extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      'films': [],
      'onLoading': false
    }

    this.searchedText = ""
    this.page = 0
    this.totalPages = 0
  }

  _displayLoading () {
    if (this.state.onLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large'/>
        </View>
      )
    }
  }

  _loadFilms () {
    this.setState({onLoading: true})
    if (this.searchedText.length > 0) {
      TMDB.getBySearchedText(this.searchedText, this.page + 1)
        .then((films) => {
          this.setState({
            films: [...this.state.films, ...films.results],
            onLoading: false
          })
          this.page = films.page
          this.totalPages = films.total_pages
        })
    }
  }

  _searchFilms () {
    this.page = 0
    this.totalPages = 0
    this.setState({ films: [] }, () => {
      this._loadFilms()
    })

  }

  render() {
    return (
      <View style={styles.view}>
        <TextInput onChangeText={(text) => this.searchedText = text} onSubmitEditing={() => {this._searchFilms()}} placeholder="Titre du film" style={styles.textInput}/>
        <Button title="Rechercher" style={styles.button} onPress={() => {this._searchFilms()}}/>
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString() }
          renderItem={({item}) => <FilmItem film={item}/>}
          onEndReachedTreshold={0.5}
          onEndReached={() => {
            if (this.page < this.totalPages) {
              this._loadFilms()
            }
          }}
        />
        {this._displayLoading()}
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
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
