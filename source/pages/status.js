import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions, ToastAndroid } from 'react-native';
import { List, Colors, Avatar, Badge } from 'react-native-paper';

// import ApiContainer from './API/container';
import user from '../assets/user.jpg'

const Status = () => {

  return (
    // <>
    //     <List.Section>
    //         <List.Subheader>Status Page</List.Subheader>
    //     </List.Section>
    //     {/* <ApiContainer /> */}
    // </>
    <View>
      <List.Section>
          
          <List.Item title="My status" description="Tap to add status update" left={props => <Avatar.Image size={55} source={user}  />} onPress={()=>{ToastAndroid.show("Trying to Update Status", ToastAndroid.SHORT)}}/>
          <List.Subheader>Recent updates</List.Subheader>
          <List.Item title="Ahmad Irfansyah" description="7 Minutes ago" left={props => <Avatar.Image size={55} source={user}  />} onPress={()=>{ToastAndroid.show("Update shown", ToastAndroid.SHORT)}}/>
          <List.Item title="M. Rizki Novriandri" description="18 Minutes ago" left={props => <Avatar.Text size={55} label="RN"  />} onPress={()=>{ToastAndroid.show("Update shown", ToastAndroid.SHORT)}}/>
          <List.Item title="Mawan Irwansyah" description="Today, 8:27 AM" left={props => <Avatar.Icon size={55} icon="github"  />} onPress={()=>{ToastAndroid.show("Update shown", ToastAndroid.SHORT)}}/>
      </List.Section>
    </View>

  );
}

export default Status;