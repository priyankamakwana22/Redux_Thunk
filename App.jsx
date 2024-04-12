import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import * as actionCreator from './src/redux/actions';

const App = props => {
  console.log('🚀 ~ App ~ onAgeDown:', props);

  // const [age, setAge] = useState(21);

  // const onAgeUp = () => {
  //   setAge(age + 1);
  // };

  // const onAgeDown = () => {
  //   setAge(age - 1);
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Your age is {props.age}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.btn} onPress={() => props.onAgeDown()}>
          <Text style={styles.txt}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => props.onAgeUp()}>
          <Text style={styles.txt}>+</Text>
        </TouchableOpacity>
      </View>
      {
        props.loading && <Image style={styles.img} source={require('./src/assets/redux.png')} />
      }
      
    </View>
  );
};

const mapStateToProps = state => {
  return {
    age: state.age,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => {
      dispatch(actionCreator.ageUp(1));
    },
    onAgeDown: () => dispatch(actionCreator.ageDown(1)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  btn: {
    width: 50,
    height: 50,
    backgroundColor: 'lightgreen',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  txt: {fontSize: 20, fontWeight: '500', color: 'black'},
  img : {height: 50, width: 50}
});
