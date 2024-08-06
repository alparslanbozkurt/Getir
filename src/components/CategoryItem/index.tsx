import React from "react";
import { TouchableOpacity, Text, Dimensions, Image} from "react-native";
import { Category } from "../../models";

const {width, height} = Dimensions.get('window')

type categoriesItemProps = {
    item:Category
}
function index({item}:categoriesItemProps) {
    return (
        <TouchableOpacity style= {{width: width*0.25, height: width* 0.25, flexDirection: 'column', alignItems:'center', 
            justifyContent:'space-between',marginTop:10
        }}>
            <Image style={{width: width * 0.18, height: width * 0.18, borderRadius:9}}
             source={{uri:item.src}}/>
            <Text style={{fontSize:11, color:'#616161', fontWeight:'500'}}>{item.name}</Text>
        </TouchableOpacity>
    );
}
{}
export default index;
