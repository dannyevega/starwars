import 'antd/dist/antd.css';
import './App.css';
import React, { Component } from 'react';
import CharactersJSON from './characters.json';
import Character from './Character';
import { List, Drawer, Card } from 'antd';

class App extends Component {
  state = {
    selectedCharacter: null
  }

  handleClick = (character) => {
    this.setState({ selectedCharacter: character });
  }

  handleClose = () => {
    this.setState({ selectedCharacter: null });
  }

  render() {
    const { selectedCharacter } = this.state;
    return (
      <div className="App">
        <div className="container">
        <h1>Star Wars</h1>
        <List
          grid={{
            gutter: 16, xs: 1, sm: 2, md: 4, lg: 4,
          }}
          dataSource={CharactersJSON.characters}
          renderItem={character => (
          <List.Item>
            <Card title={character.name}>
              <a onClick={() => this.handleClick(character)}>View Films</a>
            </Card>
          </List.Item>
        )}/>

        <Drawer
          title={selectedCharacter && selectedCharacter.name}
          width={300}
          placement="right"
          closable={false}
          visible={Boolean(selectedCharacter)}
          onClose={this.handleClose}>
          {selectedCharacter && <Character character={selectedCharacter} />}
        </Drawer>        
        </div>
      </div>
    );
  }
}

export default App;
