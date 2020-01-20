import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from 'react-native';
import {login} from '../../redux/userRedux/action';
import {connect} from 'react-redux';
import {showModal} from '../Navigations';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'vanlethi.dev@gmail.com',
      password: '12345',
    };
  }
  login = () => {
    var user = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.login(user);
  };
  register = () => {
    showModal('Register');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>SIGN IN</Text>
          <Image
            style={styles.img}
            source={require('../../assets/image/user.png')}
          />
          <View style={styles.field}>
            <Text>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => this.setState({email: text})}
              value={this.state.email}
            />
          </View>
          <View style={styles.field}>
            <Text>Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => this.setState({password: text})}
              value={this.state.password}
            />
          </View>
          <View style={styles.errs}>
            <Text style={{color: '#FFA07A'}}>{this.props.errs}</Text>
          </View>
          <TouchableOpacity style={styles.field} onPress={this.login}>
            <Text style={styles.btn}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={this.register}>
            <Text style={{color: '#00BFFF'}}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    errs: state.users.errs,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  form: {
    borderRadius: 7,
    margin: 20,
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  title: {
    height: 50,
    width: 150,
    backgroundColor: '#00BFFF',
    textAlign: 'center',
    paddingTop: 13,
    marginLeft: 85,
    marginBottom: 10,
    marginTop: -10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  btn: {
    height: 30,
    width: 100,
    backgroundColor: '#00BFFF',
    textAlign: 'center',
    paddingTop: 5,
    marginLeft: 55,
    marginBottom: 10,
    color: '#fff',
  },
  field: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 15,
  },
  img: {
    height: 100,
    width: 100,
    marginLeft: 110,
  },
  errs: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 15,
  },
});
