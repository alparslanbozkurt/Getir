import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import Entypo from '@expo/vector-icons/Entypo'; //sağ tarafa bakan ok için import edildi

function Index() {
    return (
        <View style={styles.headerMain}>
            <View style={styles.headerOne}>
                <Image
                    source={require('../../../assets/image/home.png')} // Yerel resminizi buraya ekleyin
                    style={{ width: 25, height: 25 }} // Gerekirse boyutları belirtin
                />
                <View style={styles.headerOneView}>
                    <Text style={{fontWeight:500, fontSize:16}}>Ev</Text>
                    <Text style={{color:'#6E7480', fontWeight:300, fontSize:11,
                        paddingLeft:4,marginRight:1,
                    }}>Boztepe Mah. Tepe Sok. 2A Blok K:5 İzmit/Koc...</Text>
                    <Entypo name="chevron-right" size={24} color="black" />
                </View>
                <View style={styles.headerTwo}>
                    <Text style ={{fontSize:10, fontWeight:'bold', color:'#DC0083'}}>TVS</Text>
                    <Text style = {{fontSize:20, fontWeight:'bold', color:'#DC0083'}}>20
                        <Text style={{fontSize:15}}>dk</Text>
                    </Text>
                </View>
            </View>
            
            <View>

            </View>
        </View>
    );
}

export default Index;
