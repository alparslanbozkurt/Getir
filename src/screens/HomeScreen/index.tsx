import React from 'react';
import {ScrollView} from 'react-native';
import HeaderMain from '../../components/HeaderMain'
import BannerCorousel from '../../components/BannerCorousel'

function Index() {
    return (
        <ScrollView stickyHeaderIndices={[0]} style = {{backgroundColor:'#f5f5f5'}}>
            <HeaderMain/>
            <BannerCorousel/>
        </ScrollView>
        //HeaderMain -> Başlangıç ekranında bulunan adres ve ulaşma süresi yazan yer
        // BannerCorousel -> Uygulama ile ilgili resimlerin gsterildiği yer
    );
}

export default Index;
