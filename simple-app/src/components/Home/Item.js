import React, {Component} from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class Item extends Component {
  moveToDetail = item => {
    this.props.moveToDetail(item);
  };
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.moveToDetail(this.props.element)}
        style={styles.container}>
        <Image style={styles.img} source={{uri: this.props.element.imageUrl}} />
        <Text style={styles.date}>{this.props.element.date.en}</Text>
        <Text style={styles.title}>{this.props.element.title}</Text>
        <Text style={styles.venue}>{this.props.element.address.en}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  date: {
    fontSize: 15,
    color: '#FF6347',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  venue: {
    fontSize: 15,
    color: '#C0C0C0',
  },
  img: {
    borderRadius: 20,
    height: 200,
  },
});
