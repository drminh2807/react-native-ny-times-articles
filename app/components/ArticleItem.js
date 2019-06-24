import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import idx from 'idx';
import { Icon } from 'native-base';

export default class ArticleItem extends Component {
  onPress = () => {
    this.props.onPress(this.props.item)
  }
  render() {
    const { item: { title, byline, published_date, media } } = this.props
    const imageUrl = idx(media, _ => _[0]["media-metadata"][0].url)
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <Image source={{ uri: imageUrl }} style={styles.avatar} />
        <View style={styles.body}>
          <Text style={styles.title} numberOfLines={2}>{title}</Text>
          <Text style={styles.byline} numberOfLines={1}>{byline}</Text>
          <View style={styles.publishedDateView}>
            <Icon name="calendar" style={styles.calendarIcon} />
            <Text style={styles.publishedDateText}>{published_date}</Text>
          </View>
        </View>
        <Icon name="arrow-forward" style={styles.forwardIcon} />
      </TouchableOpacity>
    );
  }
}

const AVATAR_SIZE = 44
const styles = StyleSheet.create({
  container: {
    margin: 12,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    marginRight: 12,
  },
  body: {
    flex: 1,
    marginRight: 12
  },
  title: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  byline: {
    fontSize: 16,
    color: '#AAA',
  },
  calendarIcon: {
    color: '#AAA',
    fontSize: 25,
    marginRight: 3,
  },
  publishedDateView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  publishedDateText: {
    fontSize: 14,
    color: '#AAA'
  },
  forwardIcon: {
    fontSize: 25,
    color: '#AAA',
  }
});