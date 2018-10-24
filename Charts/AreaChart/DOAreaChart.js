import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewBase, ScrollView } from 'react-native';
import DoChartBase from '../DOChartBase.js'
//import { forEach } from '../../../../../../../../Library/Caches/typescript/2.6/node_modules/@types/async';
import DOAreaChartCategory from './DOAreaChartCategory.js'
import DOAreaChartTooltip from './DOAreaChartTooltip';
import AreaChartUtilities from './DOAreaUtility.js';

   
export default class DOAreaChart extends DoChartBase {

    constructor(props){
        super(props);
        this.state={
            dataGap: 0,
            toolTipVisible:false,
            toolTipIndexOfCategory:-1,
            toolTipIndexOfSubCategory:-1,
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

    showToolTip ( indexOfCategory, indexOfSubCategory, indexOfData, pointY ) {
        this.setState({
            toolTipVisible: true,
            toolTipIndexOfCategory: indexOfCategory,
            toolTipIndexOfSubCategory: indexOfSubCategory,
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
        var leftScaleView = <View/>
        var leftScaleShadowView = <View/>
        var {backScaleView} = <View/>
        var legendsView = <View/>

        if(this.state.BackGroundColor != null){
            //Another way of saying that parent states are initiallized.
            color = this.state.BackGroundColor;

            //Lets draw bars...

            heightInternal = (parseInt(this.state.ChartHeight, 10) + 1);
            widthInternal = (parseInt(this.state.ChartWidth, 10) + 1);

            var showLeftRangePannel = this.state.ChartData.chart.showLeftRangePannel;
            var widthOfLeftRangePannel = 0;
            if(showLeftRangePannel){
                widthOfLeftRangePannel = this.state.ChartData.chart.widthOfLeftRangePannel;
            }
            
            var showBottomLegendsPannel = this.state.ChartData.chart.showBottomLegendsPannel;
            var heightOfBottomLegendsPannel = 0;
            if(showBottomLegendsPannel) {
                heightOfBottomLegendsPannel = this.state.ChartData.chart.heightOfBottomLegendsPannel;
            }

            var showXaxis = this.state.ChartData.categories[0].showCategoryLabel;
            var heightOfXaxis = 0;
            if(showXaxis){
                heightOfXaxis = this.state.ChartData.categories[0].categoryLabelHeight;
            }

            var heightOfLeftRangePannel = heightInternal - heightOfBottomLegendsPannel - heightOfXaxis;
            
            var widthOfBottomLegendsPannel = widthInternal - widthOfLeftRangePannel;

            var heightOfScroll = heightOfLeftRangePannel + heightOfXaxis
            var widthOfScroll = widthInternal - widthOfLeftRangePannel;

            var numberOfCategories = this.state.ChartData.categories[0].category.length;

            var heightOfCategory = heightOfScroll;
            var widthOfCategory  = widthOfScroll / (numberOfCategories * 1.0);
            
            var widthOfXaxis = widthOfScroll;

            var willFitData = this.state.ChartData.chart.willFitData;
            if(willFitData == false){
                widthOfCategory = this.state.ChartData.categories[0].categoryWidth;
                widthOfXaxis = widthOfCategory * numberOfCategories;
            }
            
            leftScaleView = AreaChartUtilities.leftScaleView(this.state.ChartData, heightOfLeftRangePannel, widthOfLeftRangePannel);
            leftScaleShadowView = AreaChartUtilities.leftScaleShadowView(heightOfLeftRangePannel+heightOfXaxis, widthOfLeftRangePannel);
            backScaleView = AreaChartUtilities.backScaleView(this.state.ChartData, heightOfLeftRangePannel, widthOfScroll);
            legendsView = AreaChartUtilities.legendsView(this.state.ChartData, widthOfScroll, heightOfBottomLegendsPannel);

            Arr = this.state.ChartData.categories[0].category.map((a, i) => {

                var nextCategory = null;
                if(i < (numberOfCategories-1)){
                    nextCategory = this.state.ChartData.dataset.map((b,j) => {
                        return {
                            "subCategoryData" : b.data[i+1].subCategoryData,
                            "legendsLabel" : b.legendsLabel,
                            "subCategories" : a.subCategories
                        }
                    });

                }

                var dataSetForCurrIndex = this.state.ChartData.dataset.map((b,j) => {
                    return {
                        "subCategoryData" : b.data[i].subCategoryData,
                        "legendsLabel" : b.legendsLabel,
                        "subCategories" : a.subCategories
                    }
                });

                var styleForCurrIndex = this.state.ChartData.style.map((a,j) => {
                    return a.data[0]
                });

                var leftScaleData = AreaChartUtilities.leftScaleData(this.state.ChartData, heightOfLeftRangePannel)

                var categoryData = {
                    "height" : heightOfCategory,
                    "width" : widthOfCategory,
                    "label" : this.state.ChartData.categories[0].category[i].label,
                    "labelHeight" : heightOfXaxis,
                    "categoryLabelColor" : this.state.ChartData.categories[0].categoryLabelColor,
                    "data" : dataSetForCurrIndex,
                    "style" : styleForCurrIndex,
                    "nextCategory" : nextCategory,
                    "ranges":this.state.ChartData.dataRange.ranges,
                    "rangesGaps":leftScaleData.scaleGaps,
                    "categoryIndex" : i
                };

                //return <View key={i} style={{ height:200,width: 20,borderBottomWidth:2, borderBottomColor: '#ededed', backgroundColor:'#333' }}><Text>{a.label} </Text></View>                            
                //return <DOBarChartCategory style={{height:heightOfCategory, width:widthOfCategory}} data={categoryData} bgColor="#fff" />
                return <DOAreaChartCategory data={categoryData} bgColor="#fff" showToolTip={this.showToolTip} />
            });

            if(this.state.toolTipVisible){

                var titleText = "";
                var descriptionText = "";
                var pointX = 0;
                var pointY = 0;

                if(this.state.toolTipIndexOfCategory != -1){
                    titleText = this.state.ChartData.categories[0].category[this.state.toolTipIndexOfCategory].label;
                    let data = this.state.ChartData.dataset[this.state.toolTipIndexOfData].data[this.state.toolTipIndexOfCategory].subCategoryData[this.state.toolTipIndexOfSubCategory];
                    descriptionText = "$" + data.value + "\n" + data.desc;

                    let style = this.state.ChartData.style[this.state.toolTipIndexOfData].data[0];
                    var widthOfSubCategories = widthOfCategory / this.state.ChartData.categories[0].category[this.state.toolTipIndexOfCategory].subCategories.length;
                    pointX = (widthOfCategory * (this.state.toolTipIndexOfCategory)) + (this.state.toolTipIndexOfSubCategory + 0.5) * widthOfSubCategories;
                    pointY = this.state.toolTipPointY;
                }

                toolTipData = this.createToolTipData( Arr.length * widthOfCategory, heightOfCategory,
                    titleText, descriptionText,
                        pointX, pointY,
                    100, 50 );

                toolTipView = <DOAreaChartTooltip data={toolTipData} toolTipAction={this.toolTipAction} />
            }
        }


        return (
            
            <View style={{ backgroundColor:color, flexDirection: 'row', height:heightInternal, width:widthInternal}} >
                <View style={{ backgroundColor:'transparent' , flexDirection: 'row' }}>
                    {leftScaleShadowView}
                    {leftScaleView}
                </View>
                <View style={{ backgroundColor:'transparent'  }}>
                    {backScaleView}
                    <View style={{ backgroundColor:"transparent", left:0, top:0, position:'absolute', height:heightInternal, width:widthOfScroll}} >
                        <ScrollView horizontal={true}>
                            {Arr}
                            {toolTipView}
                        </ScrollView>
                        {legendsView}
                    </View>
                </View>
            </View>
        );
    }
}