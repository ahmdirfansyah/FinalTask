import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions, ToastAndroid } from 'react-native';
import { List, Colors, Avatar, Badge } from 'react-native-paper';

import user from '../assets/user.jpg'

const Calls = () => {

  return (
    <View>
        <List.Section>
            <List.Item title="M. Rizki Novriandri" description="Today, 12:16 AM" left={props => <Avatar.Text size={55} label="RN"  />} right={props => <Avatar.Icon size={30} icon="phone" /> } onPress={()=>{ToastAndroid.show("Call Pressed", ToastAndroid.SHORT)}}/>
            <List.Item title="Mawan Irwansyah" description="Yesterday, 6:43 PM" left={props => <Avatar.Icon size={55} icon="github"  />} right={props => <Avatar.Icon size={30} icon="video" /> } onPress={()=>{ToastAndroid.show("Call Pressed", ToastAndroid.SHORT)}}/>
        </List.Section>
    </View>
  );
}

export default Calls;