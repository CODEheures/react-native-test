import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import TMDB from "../Helpers/TMDB"

export default class Search extends React.Component {
  render() {
    const film = this.props.film
    return (
      <View style={styles.view}>
        <Image style={styles.image} source={{uri: TMDB.getImageFromAPI(film.poster_path)}} />
        <View style={styles.view_description}>
          <View style={styles.view_title}>
            <Text style={styles.text_title}>{film.title}</Text>
            <Text style={styles.text_vote}>{film.vote_average}</Text>
          </View>
          <Text style={styles.text_description} numberOfLines={6}>{film.overview}</Text>
          <Text style={styles.text_date}>Sortie le {film.release_date}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    height: 190,
    backgroundColor: '#f2f0ef'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  view_description: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  view_title: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5
  },
  text_title: {
    flex: 2,
    flexWrap: 'wrap',
    fontSize: 14,
    fontWeight: '900'
  },
  text_vote: {
    flex: 1,
    fontSize: 26,
    color: '#666666'
  },
  text_description: {
    flex: 1,
    fontStyle: 'italic'
  },
  text_date: {
    textAlign: 'right',
    paddingTop: 5,
    fontSize: 14
  }
})
