import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions, ToastAndroid } from 'react-native';
import { List, Colors, Avatar, Badge } from 'react-native-paper';


import user from '../assets/user.jpg'


const Chat = () => {


  return (

    <View>
        <List.Section>
            {/* <List.Subheader>Some title</List.Subheader> */}
            <List.Item title="Ahmad Irfansyah" description="Assalamu'alaikum" left={props => <Avatar.Image size={55} source={user}  />} right={props => <Text>03.49</Text>} onPress={()=>{ToastAndroid.show("Chat Pressed", ToastAndroid.SHORT)}}/>
            <List.Item title="Ahmad Irfansyah" description="Assalamu'alaikum" left={props => <Avatar.Image size={55} source={user}  />} right={props => <Text>03.49</Text>} onPress={()=>{ToastAndroid.show("Chat Pressed", ToastAndroid.SHORT)}}/>
            <List.Item title="Ahmad Irfansyah" description="Assalamu'alaikum" left={props => <Avatar.Image size={55} source={user}  />} right={props => <Text>03.49</Text>} onPress={()=>{ToastAndroid.show("Chat Pressed", ToastAndroid.SHORT)}}/>
            <List.Item title="Ahmad Irfansyah" description="Assalamu'alaikum" left={props => <Avatar.Image size={55} source={user}  />} right={props => <Text>03.49</Text>} onPress={()=>{ToastAndroid.show("Chat Pressed", ToastAndroid.SHORT)}}/>
            <List.Item title="Ahmad Irfansyah" description="Assalamu'alaikum" left={props => <Avatar.Image size={55} source={user}  />} right={props => <Text>03.49</Text>} onPress={()=>{ToastAndroid.show("Chat Pressed", ToastAndroid.SHORT)}}/>
            <List.Item title="Ahmad Irfansyah" description="Assalamu'alaikum" left={props => <Avatar.Image size={55} source={user} />} right={props => <Text>03.49</Text>} onPress={()=>{ToastAndroid.show("Chat Pressed", ToastAndroid.SHORT)}}/>
        </List.Section>
    </View>
  );
}

export default Chat;