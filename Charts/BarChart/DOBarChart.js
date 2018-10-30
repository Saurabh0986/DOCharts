import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewBase, ScrollView } from 'react-native';
import DoChartBase from '../DOChartBase.js'
//import { forEach } from '../../../../../../../../Library/Caches/typescript/2.6/node_modules/@types/async';
import DOBarChartCategory from './DOBarChartCategory.js'
import RNTooltips from 'react-native-tooltips';
import DOBarChartTooltip from './DOBarChartTooltip';

   
export default class DOBarChart extends DoChartBase {

    constructor(props){
        super(props);
        this.state={
            BarWidth: 0,
            BarGap: 0,
            toolTipVisible:false,
            toolTipIndexOfCategory:-1,
            toolTipIndexOfData:-1,
            toolTipPointY:0,
            toolTipTarget:this
        };

        this.showToolTip = this.showToolTip.bind(this)
        this.toolTipAction = this.toolTipAction.bind(this)
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
    
    // showToolTip(e) {
    //     e.preventDefault()
    //     this.setState({
    //       //someVar: someValue
    //     })
    // }

    toolTipAction() {
        this.setState({
            toolTipVisible: false
        });
    }

    createToolTipData( containerWidth, containerHeight, 
                        headingText = "", detailsText = "",
                        pointX = 0, pointY = 0, 
                        ttWidth = 200, ttHeight = 100 ) {
        return ({
            "BackGroundColor" : "#092A56",
            "BorderColor" : "#ddd",
            "HeadingText" : headingText,
            "DetailsText" : detailsText,
            "HeadingTextColor" : '#29C4C2',
            "DetailsTextColor" : '#ffffff',
            "pointX" : pointX,
            "pointY" : pointY,
            "ttWidth" : ttWidth,
            "ttHeight" : ttHeight,
            "containerWidth" : containerWidth, //Arr.length * widthOfCategory,
            "containerHeight" : containerHeight,//heightOfCategory
        });
    }

    showToolTip ( indexOfCategory, indexOfData, pointY ) {
        this.setState({
            toolTipVisible: true,
            toolTipIndexOfCategory: indexOfCategory,
            toolTipIndexOfData: indexOfData,
            toolTipPointY:pointY
        });
    }


    render() {

        var color = "#fff";
        var Arr = <View></View>
        var heightInternal = 0;
        var widthInternal = 0;

        var toolTipData = null;
        var toolTipView = <View/>
        if(this.state.BackGroundColor != null){
            //Another way of saying that parent states are initiallized.
            color = this.state.BackGroundColor;

            var chartTag = <View></View> 

            //Lets draw bars...

            heightInternal = (parseInt(this.state.ChartHeight, 10) + 1);
            widthInternal = (parseInt(this.state.ChartWidth, 10) + 1);

            // var widthOfCategory = (widthInternal/this.state.ChartData.categories[0].category.length);
            var widthOfCategory = this.state.ChartData.categories[0].categoryWidth*1;
            var heightOfCategory = heightInternal;

            var categoryLabelHeight = this.state.ChartData.categories[0].categoryLabelHeight;

            //Add for loop here if you want to support more than one catagories type....
            let categoryIndex = 0;

            let animateChartOnStateSet = this.state.AnimateChartOnStateSet;
            this.state.AnimateChartOnStateSet = false;

            Arr = this.state.ChartData.categories[0].category.map((a, i) => {

                var dataSetForCurrIndex = this.state.ChartData.dataset.map((a,j) => {
                    return {
                        "data" : a.data[i],
                        "maxValue" : a.maxValue
                    }
                });

                var styleForCurrIndex = this.state.ChartData.style.map((a,j) => {
                    return a.data[0]
                });

                var categoryData = {
                    "height" : heightOfCategory,
                    "width" : widthOfCategory,
                    "label" : this.state.ChartData.categories[categoryIndex].category[i].label,
                    "labelHeight" : categoryLabelHeight,
                    "categoryLabelFontSize" : this.state.ChartData.categories[categoryIndex].categoryLabelFontSize,
                    "categoryLabelColor" : this.state.ChartData.categories[categoryIndex].categoryLabelColor,

                    "categoryDividerColor" : this.state.ChartData.categories[categoryIndex].categoryDividerColor,
                    "categoryDeviderThickness" : this.state.ChartData.categories[categoryIndex].categoryDeviderThickness,

                    "data" : dataSetForCurrIndex,
                    "style" : styleForCurrIndex,
                    "xAxisThickness" : this.state.ChartData.categories[categoryIndex].xAxisThickness,
                    "xAxisColor" : this.state.ChartData.categories[categoryIndex].xAxisColor,
                    "animateOnStateSet" : animateChartOnStateSet,
                    "categoryIndex" : i
                };

                //return <View key={i} style={{ height:200,width: 20,borderBottomWidth:2, borderBottomColor: '#ededed', backgroundColor:'#333' }}><Text>{a.label} </Text></View>                            
                //return <DOBarChartCategory style={{height:heightOfCategory, width:widthOfCategory}} data={categoryData} bgColor="#fff" />
                return <DOBarChartCategory data={categoryData} showToolTip={this.showToolTip} key={i} />
            });

            if(this.state.toolTipVisible){

                var titleText = "";
                var descriptionText = "";
                var pointX = 0;
                var pointY = 0;

                if(this.state.toolTipIndexOfCategory != -1){
                    titleText = this.state.ChartData.categories[categoryIndex].category[this.state.toolTipIndexOfCategory].label;
                    let data = this.state.ChartData.dataset[this.state.toolTipIndexOfData].data[this.state.toolTipIndexOfCategory];
                    descriptionText = "$" + data.value + "\n" + data.topSummary;

                    let style = this.state.ChartData.style[this.state.toolTipIndexOfData].data[categoryIndex];

                    pointX = (widthOfCategory * (this.state.toolTipIndexOfCategory)) + ((style.margin)*2 + style.barWidth)*(this.state.toolTipIndexOfData+1);
                    pointY = this.state.toolTipPointY + categoryLabelHeight;
                }

                toolTipData = this.createToolTipData( Arr.length * widthOfCategory, heightOfCategory,
                    titleText, descriptionText,
                     pointX, pointY,
                   100, 50 );

                toolTipView = <DOBarChartTooltip data={toolTipData} toolTipAction={this.toolTipAction} key="tooltip" />
            }

        }


        return (
            
            <View style={{ backgroundColor:color, flexDirection: 'row', height:heightInternal, width:widthInternal}} >
                <ScrollView horizontal={true}>
                    {Arr}
                    {toolTipView}
                </ScrollView>
            </View>
        );
    }
}