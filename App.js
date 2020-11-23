import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      larAnimada: new Animated.Value(180),
      altAnimada: new Animated.Value(35),
      opAnimada: new Animated.Value(0),
    };

    this.carregarGrafico = this.carregarGrafico.bind(this)


  }

  carregarGrafico() {

    Animated.sequence([
      Animated.timing(
        this.state.opAnimada,
        {
          toValue: 1,
          duration: 400
        }
      ),
      Animated.timing(
        this.state.altAnimada,
        {
          toValue: 450,
          duration: 1000
        }
      ),
    ]).start()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{
          height: 80,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: '#4169E1',
          margin: 20,
          borderRadius: 25,
          elevation: 5
        }}>

          <TouchableOpacity onPress={this.carregarGrafico}>
            <Text style={{
              fontSize: 25,
              color: 'white'
            }}>
              Gerar Gráfico
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
          <Animated.View style={{
            width: this.state.larAnimada,
            height: this.state.altAnimada,
            opacity: this.state.opAnimada,
            backgroundColor: "#7ac29b",
            justifyContent: 'center',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25
          }}>
            <Text style={{
              color: 'white',
              fontSize: 22,
              textAlign: 'center'
            }}>
              R$ 150,00
          </Text>
          </Animated.View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default App;
