import * as React from 'react';
import {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import {View,Text,StyleSheet,Button,Pressable,Image, KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function DiaryScreen({navigation}){

    const [imageUrl,setImageUrl] = useState("https://postfiles.pstatic.net/MjAyMjA4MDVfMTc5/MDAxNjU5NzA4MDE3NzI4.wKPSMwPywkQoHmm_ok_vy95gLx1JU73wLxpU25PvMJgg.wQ3BaE7Yu7X6GSI03FKJ22-PwbxMoFTgKWmoKE540dcg.PNG.loveyr0118/image.png?type=w966");
    const [status,requestPermission] = ImagePicker.useMediaLibraryPermissions();
    const uploadImage = async() =>{
        if(!status?.granted){
            const permission = await requestPermission();
            if(!permission.granted){
                return null;

            }
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:false,
            quality:1,
            aspect:[1,1]
        });
        if(result.cancelled){
            return null;
        }
        console.log(result); 
        setImageUrl(result.uri);
    };
    return(
        <View>
            <View style={style.header}>
                <Ionicons name="play" size={25} style={{marginLeft:18,marginRight:5,color:'#8E5C21'}}></Ionicons>
                <Text style={{fontSize:18, color:'#8E5C21'}}>일기쓰기</Text>
            </View>
            <View style={style.imagefile}>
                <Pressable onPress={uploadImage}>
                    <Image source ={{uri:imageUrl}} style={style.image}/>
                </Pressable>
            </View>
            <View style={style.title}>
                <TextInput returnKeyLabel="save"
                            placeholder="제목"
                            placeholderTextColor='#8E5C21'
                            style={{fontSize:18}}>
                </TextInput>
            </View>
            <View style={style.content}>
                <TextInput returnKeyLabel="enter"
                            placeholder="내용을 입력해주세요"
                            placeholderTextColor='#8E5C21'
                            multiline={true}
                            style={{fontSize:18}}>
                </TextInput>

            </View>
            <View>
                <Button title='업로드' color={'#8E5C21'}/>
            </View>
        </View>
    )
}

const style= StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        height:50,
    },
    title:{
        backgroundColor:'white',
        paddingLeft:20,
        height:50,
        fontSize:18,
        justifyContent:'center',
        borderWidth:0.2,
        borderColor:'#A89278'
    },
    content:{
        backgroundColor:'white',
        paddingLeft:20,
        paddingTop:10,
        height:370,
        fontSize:18,
        justifyContent:'flex-start',
        borderWidth:0.2,
        borderColor:'#A89278'
    },
    imagefile:{
        backgroundColor:'white',
        height:60,
    },
    image:{
        height:50,
        width:50,
        marginLeft:20,
        marginEnd:5,
        backgroundColor:'#F2F2F2'

    }
})
