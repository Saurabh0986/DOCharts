import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewBase } from 'react-native';
import DoChartBase from '../DOChartBase.js'
//import { forEach } from '../../../../../../../../Library/Caches/typescript/2.6/node_modules/@types/async';
import DOBarChartCategory from './DOBarChartCategory.js'

   
export default class DOBarChart extends DoChartBase {

    constructor(props){
        super(props);
        this.state={
            BarWidth: 0,
            BarGap: 0

        };
    }
    
    componentDidMount(){
        super.componentDidMount();
        this.setState({
            BarWidth: this.props.barWidth,
            BarGap: this.props.barGap
        });
    }
    
    componentWillReceiveProps(nextProps,nextState){
        super.componentWillReceiveProps(nextProps, nextState);
        this.setState({
            BarWidth: nextProps["barWidth"],
            BarGap: nextProps["barGap"]
        });
    }
       
    shouldComponentUpdate(nextProps,nextState){
        // your condition if you want to re-render every time on props change
        return super.shouldComponentUpdate(nextProps, nextState);
    }

    // createBar() {
    //     return (<View style={{ height:'100', width:'10', backgroundColor:'red'  }}>
    //     </View>)
    // }
    
    // createBars () {
    //     return this.state.ChartData.categories.forEach(element => {
    //         return (
    //             {createBar}
    //           )
    //     });
    //   }
    


    render() {

        var color = "#fff";
        var Arr = <View></View>
        var heightInternal = 0;
        var widthInternal = 0;
        if(this.state.BackGroundColor != null){
            //Another way of saying that parent states are initiallized.
            color = this.state.BackGroundColor;

            var chartTag = <View></View> 

            //Lets draw bars...

            heightInternal = (parseInt(this.state.ChartHeight, 10) + 1);
            widthInternal = (parseInt(this.state.ChartWidth, 10) + 1);

            var widthOfCategory = (widthInternal/this.state.ChartData.categories[0].category.length);
            var heightOfCategory = heightInternal;

            //Add for loop here if you want to support more than one catagories type....
            let categoryIndex = 0;

            Arr = this.state.ChartData.categories[0].category.map((a, i) => {

                var dataSetForCurrIndex = this.state.ChartData.dataset.map((a,i) => {
                    return a.data[i]
                });

                var styleForCurrIndex = this.state.ChartData.dataset.map((a,i) => {
                    return a.data[0]
                });

                var categoryData = {
                    "height" : heightOfCategory,
                    "width" : widthOfCategory,
                    "label" : this.state.ChartData.categories[categoryIndex].category[i].label,
                    "categoryLabelColor" : this.state.ChartData.categories[categoryIndex].categoryLabelColor,
                    "data" : dataSetForCurrIndex,
                    "style" : styleForCurrIndex
                };

                //return <View key={i} style={{ height:200,width: 20,borderBottomWidth:2, borderBottomColor: '#ededed', backgroundColor:'#333' }}><Text>{a.label} </Text></View>                            
                //return <DOBarChartCategory style={{height:heightOfCategory, width:widthOfCategory}} data={categoryData} bgColor="#fff" />
                return <DOBarChartCategory data={categoryData} bgColor="#fff" />
            });


        }



        return (
            <View style={{ backgroundColor:color, flexDirection: 'row', height:heightInternal, width:widthInternal}} >
            {Arr}
            </View>
        );
    }

    


}