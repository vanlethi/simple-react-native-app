import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import {register} from '../../redux/userRedux/action';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      name: '',
      phone: '',
    };
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed = ({buttonId}) => {
    console.log('buttonId', buttonId);
    const {componentId} = this.props;
    if (buttonId === 'close') {
      Navigation.dismissModal(componentId);
    }
  };
  register = () => {
    var user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      name: this.state.fullName,
      phone: this.state.tel,
    };
    this.props.register(user);
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.form}>
            <View style={styles.field}>
              <Text>User name</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => this.setState({username: text})}
                value={this.state.username}
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
            <View style={styles.field}>
              <Text>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => this.setState({email: text})}
                value={this.state.email}
              />
            </View>
            <View style={styles.field}>
              <Text>Full Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => this.setState({name: text})}
                value={this.state.name}
              />
            </View>
            <View style={styles.field}>
              <Text>Phone number</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => this.setState({phone: text})}
                value={this.state.phone}
              />
            </View>
            <View style={styles.errs}>
              <Text style={{color: '#FFA07A'}}>{this.props.errs}</Text>
            </View>
            <TouchableOpacity style={styles.field} onPress={this.register}>
              <Text style={styles.btn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    register: user => dispatch(register(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  form: {
    paddingTop: 30,
    margin: 20,
    alignContent: 'center',
    justifyContent: 'center',
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
    height: 50,
    width: 100,
    backgroundColor: '#00BFFF',
    textAlign: 'center',
    paddingTop: 15,
    marginLeft: 85,
    marginBottom: 10,
    color: '#fff',
    borderRadius: 3,
  },
  field: {
    marginLeft: 20,
    marginRight: 20,
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
