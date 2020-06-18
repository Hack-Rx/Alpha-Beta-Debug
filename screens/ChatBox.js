import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

export default class ChatBox extends React.Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hi i am Anandi',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar:
              'https://cdn.dribbble.com/users/497773/screenshots/6580509/virtual_reality_icon_02.png',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    console.log(this.state.messages);
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
