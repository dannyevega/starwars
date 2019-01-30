import React, { Component } from 'react';
import CharactersJSON from './characters.json';
import Character from './components/Character';
import { Card } from './components/Card';
import { CardContainer } from './components/CardContainer';
import { Main } from './components/Main';
import { Drawer } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './App.css';

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
    <Main>
      <div className="App">
        <div className="container">
          <h1>Star Wars</h1>
          <CardContainer>
            <div className='card-container'>
              {CharactersJSON.characters.map(character => {
                return (
                  <Card className='col-9 col-md-6 col-lg-3 my-3 mx-auto'>
                    <div className='card'>
                      <div className='img-container p-5'>
                        <img src='https://www.freepnglogos.com/uploads/star-wars-logo-1.png' alt='sneaker' className='card-img-top' />
                      </div>

                      <div className='card-footer d-flex justify-content-between'>
                        <p onClick={() => this.handleClick(character)} className='align-self-center mb-0 name'>{character.name}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </CardContainer>

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
    </Main>
    );
  }
}

export default App;
