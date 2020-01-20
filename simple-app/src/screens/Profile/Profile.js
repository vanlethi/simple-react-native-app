import React, {Component} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import {logout} from '../../redux/userRedux/action';

class Profile extends Component {
  logout = () => {
    this.props.logout();
    Navigation.setRoot({
      root: {
        component: {
          name: 'Login',
        },
      },
    });
  };
  render() {
    return (
      <View>
        <ImageBackground
          style={styles.cover}
          source={require('../../assets/image/cover.jpg')}>
          <Image
            style={styles.avatar_img}
            source={require('../../assets/image/avatar.jpg')}
          />
          <Text style={styles.name}>{this.props.users.username}</Text>
        </ImageBackground>
        <View style={styles.group_field}>
          <View style={styles.field}>
            <Image
              style={styles.info_img}
              source={require('../../assets/image/email.png')}
            />
            <Text>{this.props.users.email}</Text>
          </View>
          <View style={styles.field}>
            <Image
              style={styles.info_img}
              source={require('../../assets/image/dob.jpg')}
            />
            <Text>September 28, 1999</Text>
          </View>
          <View style={styles.field}>
            <Image
              style={styles.info_img}
              source={require('../../assets/image/address.png')}
            />
            <Text>Nam Giang, Quang Nam</Text>
          </View>
        </View>
        <TouchableOpacity onPress={this.logout}>
          <Text style={styles.btn}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: user => dispatch(logout(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
const styles = StyleSheet.create({
  avatar_img: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginTop: 50,
    marginLeft: 20,
  },
  cover: {
    height: 150,
    flexDirection: 'row',
  },
  name: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
    marginTop: 110,
    marginLeft: 10,
  },
  field: {
    flexDirection: 'row',
    marginTop: 10,
  },
  info_img: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  group_field: {
    marginLeft: 40,
    marginTop: 50,
  },
  btn: {
    height: 30,
    width: 100,
    backgroundColor: '#00BFFF',
    textAlign: 'center',
    paddingTop: 5,
    marginLeft: 130,
    marginTop: 110,
    color: '#fff',
  },
});
