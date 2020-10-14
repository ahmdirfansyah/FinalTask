import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';


const chatRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#e1ebe4' }]} >
  {/* <Chat/> */}
  </View>
);

const statusRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#e1ebe4' }]} />
);

const callsRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#e1ebe4' }]} />
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
  ]);

  const renderScene = SceneMap({
    chat: chatRoute,
    status: statusRoute,
    calls: callsRoute,
  });

  return (
    <>
    <Appbar.Header>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Content title="WhatsApp KW" subtitle="v.1.0" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>

    <TabView
    navigationState={{ index, routes }}
    renderScene={renderScene}
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