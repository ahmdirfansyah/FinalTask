import React, { Component } from 'react';
import ApiView from './ApiView';
import axios from 'axios';
import styles from './ApiStyles';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    ToastAndroid,
    StyleSheet,
} from "react-native";
import { List, Colors, Avatar, Badge, Divider } from 'react-native-paper';
import { ListItem } from 'react-native-elements';

class ApiContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            fromFetch: false,
            fromAxios: false,
            dataSource: [],
            axiosData: null
        };
    }
    goForFetch = () => {
        this.setState({
            fromFetch: true,
            loading: true,

        })
        fetch("https://5f847ee4c29abd001618fbf5.mockapi.io/apidata")
            .then(response => response.json())
            .then((responseJson) => {
                console.log('getting data from fetch', responseJson)
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        dataSource: responseJson
                    })
                }, 2000)

            })
            .catch(error => console.log(error))
    }
    goForAxios = () => {
        this.setState({
            fromFetch: false,
            loading: true,

        })
        axios.get("https://5f847ee4c29abd001618fbf5.mockapi.io/apidata")
            .then(response => {
                console.log('getting data from axios', response.data);
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        axiosData: response.data
                    })
                }, 2000)
            })
            .catch(error => {
                console.log(error);
            });
            
    }
    FlatListSeparator = () => {
        return (
            <View style={{
                height: .5,
                width: "1000%",
                backgroundColor: "rgba(0,0,0,0.5)",
            }}
            />
        );
    }
    renderItem = (data) => {
        return (
            // <TouchableOpacity style={styles.list}>
            //     <Text style={styles.lightText}>{data.item.name}</Text>
            //     <Text style={styles.lightText}>{data.item.comment}</Text>
            //     <Text style={styles.lightText}>{data.item.avatar}</Text>
            // </TouchableOpacity>
            <View>
            {/* <List.Section> */}
                {/* <List.Item title={data.item.name} description={data.item.comment} left={props => <Avatar.Image size={55} source={data.item.avatar} />} onPress={()=>{ToastAndroid.show("Chat Pressed", ToastAndroid.SHORT)}}/> */}
                {/* <Divider /> */}
                <ListItem 
                leftAvatar={{source: { uri : data.item.avatar }}}
                size={2000}
                title={data.item.name}
                subtitle={data.item.comment}
                onPress={() => console.log("Chat Pressed")}
                />
                <Divider/>
            {/* </List.Section> */}
            {/* <Avatar rounded source={data.item.avatar}/> */}
        </View>
        )

    }


    render() {
        const { dataSource, fromFetch, fromAxios, loading, axiosData } = this.state
        return (
            <ApiView
                goForFetch={this.goForFetch}
                goForAxios={this.goForAxios}
                dataSource={dataSource}
                loading={loading}
                fromFetch={fromFetch}
                fromAxios={fromAxios}
                axiosData={axiosData}
                FlatListSeparator={this.FlatListSeparator}
                renderItem={this.renderItem}
            />
        );
    }
}

export default ApiContainer;