import * as React from 'react';
import {useState} from 'react';
import { View, Image, Text, StyleSheet,Pressable,} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

let leafcolor;
let focusable = 'black';
function leaf(){
    if(focusable!='green'){

        focusable = 'green';
    }
    else{
        focusable = 'black';
    }
    console.log(focusable);
};
export default class CardCompnent extends React.Component{
    render(){
        function leaf(){
            const [focusable,setfocusable] =state('');
            if(focusable!='green'){

                setfocusable = 'green';
            }
            else{
                setfocusable = 'black';
            }
            console.log(focusable);
        };
        return (
            <View style={style.feed}>
                <View style={style.profilebar}>
                    <Image source={{uri:"https://i.pinimg.com/736x/33/cd/72/33cd7251bfdfd4efb6f58892e97a93a1.jpg"}}
                    style={style.profile}/>
                    <View>
                        <Text>yr0118kim</Text>
                        <Text>2022년 8월 3일</Text>
                    </View>
                </View>
                <Image source={{uri:"https://www.kukinews.com/data/kuk/image/2022/07/19/kuk202207190281.680x.0.jpg"}}
                        style={style.image}/>
                <View style={style.btn}>
                    <Pressable onPress={()=>leaf()}>
                        <Ionicons name="leaf-outline" size={25} style={style.leaf}></Ionicons>
                    </Pressable>
                    <Ionicons name="chatbox-outline" size={25} style={{marginLeft:5}}></Ionicons>
                </View>
                <Text style={{marginLeft:12}}>공감 250개</Text>
                <Text style={{marginLeft:12}}>yr0118kim  오늘은 우영우 방송일!!</Text>
            </View>
        );
}
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    profilebar:{
        width:350,
        marginTop:5,
        backgroundColor:"white",
        flexDirection:'row',
        alignItems:'center'
    },
    profile:{
        width:50,
        height:50,
        borderRadius:150,
        margin:5,
        marginLeft:10,
        marginRight:10,
    },
    feed:{
        width:350,
        height:400,
        marginTop:5,
        backgroundColor:'white',
        alignItems:'flex-start',
        borderRadius:5,
    },
    image:{
        width:350,
        height:250,
    },
    btn:{
        marginLeft:10,
        margin:5,
        flexDirection:'row',
    },
    leaf:{
        color:focusable
    }

});