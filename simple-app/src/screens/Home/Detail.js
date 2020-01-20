import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  ImageBackground,
  FlatList,
} from 'react-native';

export default class Detail extends Component {
  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={{uri: this.props.item.imageUrl}}
          style={styles.top}>
          <Text style={styles.title}>{this.props.item.title}</Text>
          <Text style={styles.text_in_top}>{this.props.item.address.en}</Text>
          <Text style={styles.text_in_top}>{this.props.item.date.en}</Text>
        </ImageBackground>
        <View style={styles.cate}>
          <Text style={styles.cate_title}>Image</Text>
          <FlatList
            style={styles.slide}
            horizontal={true}
            data={this.props.item.imageReference}
            renderItem={({item}) => (
              <Image style={styles.sub_slide} source={{uri: item}} />
            )}
          />
        </View>
        <View style={styles.cate}>
          <Text style={styles.cate_title}>Description</Text>
          <Text>{this.props.item.subtitle.en}</Text>
        </View>
        <View>
          <Button title="Visit our website" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    height: 200,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 20,
    textTransform: 'capitalize',
    color: '#fff',
    marginLeft: 10,
  },
  text_in_top: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 10,
  },
  sub_slide: {
    flex: 1,
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 7,
  },
  cate: {
    margin: 10,
  },
  cate_title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
