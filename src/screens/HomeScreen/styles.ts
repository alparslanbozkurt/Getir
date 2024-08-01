import { StyleSheet, Dimensions } from "react-native";

const {height} = Dimensions.get('window')
const styles = StyleSheet.create({
    headerMain:{
        height : height*0.06,
        backgroundColor : '#F7D102'
    },

    headerOne:{
        height : height*0.064,
        width : '80%',
        backgroundColor : 'white',
        flexDirection : 'row', //adres türü adres vb. yan yana durmasını sağlar.
        alignItems : 'center',
        paddingHorizontal : '3%',
        borderTopRightRadius : 25,
        borderBottomRightRadius: 25,
    },

    headerOneView:{
        flexDirection : 'row', //adres türü adres vb. yan yana durmasını sağlar.
        alignItems : 'center',
        marginLeft:8,
        borderLeftColor:'#F3F2FD',
        borderLeftWidth:2,
        paddingLeft:8,
    },

    headerTwo:{
        height : height*0.064,
        flexDirection : 'column', //Bileşenlerini dikey olarak sırala
        alignItems : 'center',
        justifyContent: 'center',
        width:'25%',
    }

})

export default styles