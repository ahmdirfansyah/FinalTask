import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions, ToastAndroid } from 'react-native';
import { List, Colors, Avatar, Badge, IconButton, Divider } from 'react-native-paper';

const Calls = () => {

  return (
    <View>
        <List.Section>
            <List.Item title="M. Rizki Novriandri" description="Today, 12:16 AM" left={props => <Avatar.Text size={55} label="RN"  />} right={props => <IconButton {...props} size={30} icon="phone" onPress={()=>{ToastAndroid.show("Calling M. Rizki Novriandri ...", ToastAndroid.SHORT)}} /> } />
            <Divider />
            <List.Item title="Mawan Irwansyah" description="Yesterday, 6:43 PM" left={props => <Avatar.Icon size={55} icon="github"  />} right={props => <IconButton {...props} size={30} icon="video" onPress={()=>{ToastAndroid.show("Calling Mawan Irwansyah ...", ToastAndroid.SHORT)}} /> } />
        </List.Section>
    </View>
  );
}

export default Calls;