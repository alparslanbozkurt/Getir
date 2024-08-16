import React from 'react';
import {ScrollView} from 'react-native';
import HeaderMain from '../../components/HeaderMain'
import BannerCorousel from '../../components/BannerCorousel'
import CategoryItem from '../../components/CategoryItem'
import MainCategories from '../../components/MainCategories'

function Index() {
    return (
        <ScrollView stickyHeaderIndices={[0]} style = {{backgroundColor:'#f5f5f5'}}>
            <HeaderMain/>
            <BannerCorousel/>
            <MainCategories/>
        </ScrollView>
        //HeaderMain -> Başlangıç ekranında bulunan adres ve ulaşma süresi yazan yer
        //BannerCorousel -> Ana sayfadaki ile ilgili resimlerin gsterildiği yer
        //MainCategories -> Ana sayfada çeşitli kategorilerin gösterildiği yer
    );
}

export default Index;
