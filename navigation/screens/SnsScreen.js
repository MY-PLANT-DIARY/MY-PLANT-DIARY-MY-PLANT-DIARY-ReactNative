import * as React from 'react';
import {View,Text,StyleSheet, ScrollView} from 'react-native';
import CardComponent from '../CardComponent';

export default function SnsScreen({navigation}){
    return(
        <View style={{flex :1, alignItems:'center'}}>
            <ScrollView>
                <CardComponent/>
                <CardComponent/>
            </ScrollView>
        </View>
    )
}
