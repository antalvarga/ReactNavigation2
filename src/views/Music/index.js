import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

import bestHome from '../../assets/favicon.png';

export default function Home( {navigation} ) {
    return(
        <View style={styles.container}>
            <Image 
                source={ bestHome }
                style={styles.imageHome}
                resizeMode="contain" 
            />

            <View style={styles.containerButton}>
                <Text style={styles.TextHeader}>MusicScreen</Text>

                <TouchableOpacity style={styles.button} 
                    onPress= {() => {
                        navigation.navigate("Home");
                        }}>
                    <Text style={styles.textButton}>Go to the Home Screen</Text>
                </TouchableOpacity>
            </View> 
 
        </View>
    );
}