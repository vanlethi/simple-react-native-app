import React, {Component} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  CheckBox,
} from 'react-native';
import {connect} from 'react-redux';

import {deleteTask, editTask} from '../../redux/todoRedux/action';
class Items extends Component {
  constructor(props) {
    super(props);
  }
  onPressEdit = item => {
    console.log('edit==>', item);
  };
  setChecker = item => {
    this.props.editTask(item);
  };
  render() {
    return (
      <View style={styles.content}>
        <View style={{flexDirection: 'row'}}>
          <CheckBox
            value={this.props.item.isCompleted}
            disabled={false}
            onChange={() => this.setChecker(this.props.item)}
          />
          <Text style={{marginTop: 8}}>{this.props.item.title}</Text>
        </View>
        <View style={styles.container_btn}>
          {/* <TouchableOpacity onPress={() => this.onPressEdit(this.props.item)}>
            <Image
              style={styles.btn}
              source={require('../../assets/image/update.png')}
            />
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => this.props.deleteTask(this.props.item.id)}>
            <Image
              style={styles.btn}
              source={require('../../assets/image/cancel.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: id => dispatch(deleteTask(id)),
    editTask: item => dispatch(editTask(item)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Items);
const styles = StyleSheet.create({
  content: {
    marginLeft: 20,
    paddingBottom: 5,
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container_btn: {
    marginRight: 15,
    flexDirection: 'row',
  },
  btn: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
});
