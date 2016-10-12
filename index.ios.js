/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

class Albums extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

AppRegistry.registerComponent('Albums', () => Albums);
