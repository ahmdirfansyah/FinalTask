import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';

import Chat from './source/pages/chat'; 
import Status from './source/pages/status'
import Calls from './source/pages/calls';
import Api from './source/pages/api';

const chatRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#c8ccc8' }]} >
  <Chat/>
  </View>
);

const statusRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#c8ccc8' }]} >
  <Status/>
  </View>
);

const callsRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#c8ccc8' }]} >
  <Calls/>
  </View>
);

const APICallRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#c8ccc8' }]} >
  <Api />
  </View>
);

const initialLayout = { width: Dimensions.get('window').width };

const App = () => {
  // const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'chat', title: 'CHAT' },
    { key: 'status', title: 'STATUS' },
    { key: 'calls', title: 'CALLS' },
    { key: 'apicall', title: 'GET API' },
  ]);

  const renderScene = SceneMap({
    chat: chatRoute,
    status: statusRoute,
    calls: callsRoute,
    apicall: APICallRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#1fc21f' }}
      style={{ backgroundColor: '#1fc21f' }}
    />
  );

  return (
    <>
    <Appbar.Header
    style={{ 
      backgroundColor: '#1fc21f', 
      color: "white",
      paddingLeft: 20
      }}>
      
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Content title="WhatsApp KW" subtitle="v.1.0" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>

    <TabView
    navigationState={{ index, routes }}
    renderScene={renderScene}
    renderTabBar={renderTabBar}
    onIndexChange={setIndex}
    initialLayout={initialLayout}
    />
    </>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export default App;