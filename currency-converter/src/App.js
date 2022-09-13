// import logo from './logo.svg';
import './App.css';
import Converter from './components/converter';
// import './components/converter.css'

function App() {
  return (
    <div className="App">
      <Converter Acurrency="USD" Bcurrency="BRL"></Converter>
    </div>
  );
}

export default App;

// ====================================================
//  component skeleton 
// ====================================================

// import React, {Component} from 'react';
// import {Text, View} from 'react-native';

// export default class componentName extends Component {
//   render() {
//     return (
//       <View>
//         <Text> </Text>
//       </View>
//     )
//   }
// }
