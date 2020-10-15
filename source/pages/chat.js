import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions, ToastAndroid } from 'react-native';
import { List, Colors, Avatar, Badge, Divider } from 'react-native-paper';

import user from '../assets/user.jpg'

const Chat = () => {
  return (
    <View>
        <List.Section>
            <List.Item title="Ahmad Irfansyah" description="Assalamu'alaikum" left={props => <Avatar.Image size={55} source={user}  />} right={props => <Badge>1250</Badge> } onPress={()=>{ToastAndroid.show("Chat Pressed", ToastAndroid.SHORT)}}/>
            <Divider />
            <List.Item title="M. Rizki Novriandri" description="Assalamu'alaikum" left={props => <Avatar.Text size={55} label="RN"  />} right={props => <Text>01.00</Text>} onPress={()=>{ToastAndroid.show("Chat Pressed", ToastAndroid.SHORT)}}/>
            <Divider />
            <List.Item title="Mawan Irwansyah" description="Assalamu'alaikum" left={props => <Avatar.Icon size={55} icon="github"  />} right={props => <Text>02.00</Text>} onPress={()=>{ToastAndroid.show("Chat Pressed", ToastAndroid.SHORT)}}/>
        </List.Section>
    </View>
  );
}

export default Chat;