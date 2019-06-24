import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { WebBrowser } from 'expo';
import Container from '../components/Container';
import Header from '../components/Header';
import { getArticles } from '../redux/action';
import ArticleItem from '../components/ArticleItem';

class ArticleList extends Component {

  componentDidMount() {
    this.props.getArticles()
  }

  onItemPress = (item) => {
    WebBrowser.openBrowserAsync(item.url)
  }

  renderItem = ({ item }) => (<ArticleItem item={item} onPress={this.onItemPress} />)

  render() {
    const { loading, articles, getArticles } = this.props
    return (
      <Container>
        <Header
          title="NY Times"
          leftIcon="menu"
          rightIcon="more"
        />
        <FlatList
          renderItem={this.renderItem}
          data={articles}
          keyExtractor={({ id }) => String(id)}
          refreshing={loading}
          onRefresh={getArticles}
        />
      </Container>
    );
  }
}

const mapStateToProps = ({ loading, articles }) => ({ loading, articles })
const mapDispatchToProps = ({ getArticles })
export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)
