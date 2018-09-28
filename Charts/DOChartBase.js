import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewBase } from 'react-native';


   
export default class DOBarChart extends Component {

    constructor(props){
        super(props);
        this.state={
            BackGroundColor: "#fff",
            ChartData: "",
            ChartWidth: "0",
            ChartHeight: "0"
        };
    }
    
    componentDidMount(){
        this.setState({
            BackGroundColor: this.props.bgColor,
            ChartData: this.props.data,
            ChartWidth: this.props.width,
            ChartHeight: this.props.height
        });
    }
    
    componentWillReceiveProps(nextProps,nextState){
        this.setState({
            BackGroundColor: nextProps["bgColor"],
            ChartData: nextProps["data"],
            ChartWidth: nextProps["width"],
            ChartHeight: nextProps["height"],
        });
    }
       
    shouldComponentUpdate(nextProps,nextState){
        // your condition if you want to re-render every time on props change
        return true;
    }

    render() {
        //this render will be overrided...
        return (
            <View>
            

            </View>
        );
    }
}