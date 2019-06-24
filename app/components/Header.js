import React from 'react';
import { Header, Left, Button, Body, Title, Right, Icon } from 'native-base';
export default ({ title, leftIcon, onLeftPress, rightIcon, onRightPress }) => (
  <Header>
    <Left>
      {leftIcon ?
        <Button transparent onPress={onLeftPress}>
          <Icon name={leftIcon} />
        </Button> : null}
    </Left>
    <Body>
      <Title>{title}</Title>
    </Body>
    <Right>
      {rightIcon ?
        <Button transparent onPress={onRightPress}>
          <Icon name={rightIcon} />
        </Button> : null}
    </Right>
  </Header>
)