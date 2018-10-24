import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BarChartContainer from './BarChartContainer.js';
import AreaChartContainer from './AreaChartContainer.js';
import HorizontalBarChartContainer from './HorizontalBarChartContainer.js'

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // barChartContainer: <BarChartContainer/>,
      // areaChartContainer: <AreaChartContainer/>,
      horizontalBarChartContainer: <HorizontalBarChartContainer/>

    };
  }




  render() {
    return (
      <View style={styles.container}>
        {this.state.horizontalBarChartContainer}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
