import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import api from '../../services/api';
import styles from './styles';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Lista Repositórios',
  };

  state = {
    newUser: '',
    repos: [],
    loading: false,
  };

  handleSearchRepos = async () => {
    const {newUser} = this.state;

    this.setState({loading: true});

    const response = await api.get(`/users/${newUser}/repos`);

    this.setState({
      repos: response.data,
      newUser: '',
      loading: false,
    });

    Keyboard.dismiss();
  };

  render() {
    const {loading, repos, newUser} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite um usuário"
            value={newUser}
            onChangeText={text => this.setState({newUser: text})}
            returnKeyType="send"
            onSubmitEditing={this.handleSearchRepos}
          />
          <RectButton style={styles.button} onPress={this.handleSearchRepos}>
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Icon name="search" size={20} color="#FFF" />
            )}
          </RectButton>
        </View>

        <FlatList
          style={styles.List}
          data={repos}
          keyExtractor={repo => String(repo.id)}
          renderItem={({item}) => (
            <View style={styles.cardRepo}>
              <Image
                style={styles.avatar}
                source={{uri: item.owner.avatar_url}}
              />
              <View style={styles.details}>
                <Text style={styles.textTitle}>{item.name}</Text>

                <View style={styles.info}>
                  <View style={styles.icon}>
                    <Icon name="star" size={16} color="#333" />
                    <Text style={styles.iconText}>{item.stargazers_count}</Text>
                  </View>
                  <View style={styles.icon}>
                    <Icon name="code-fork" size={16} color="#333" />
                    <Text style={styles.iconText}>{item.forks}</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}
