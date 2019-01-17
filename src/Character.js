import React, { Component } from 'react';
import { Alert, Spin } from 'antd';
import Film from './Film';

function getCharacterFilms (results) {
  return results.films.map(film => {
    return fetch(film)
      .then(response => {
        return response.json()
      })
      .then(results => {
        return {
          title: results.title,
          director: results.director,
          release: results.release_date
        }
      }).catch(error => {
        console.log(error);
      });
  });  
}

class Character extends Component {
  state = {
    error: false,
    loadingFilms: false,
    films: []
  }

  componentDidMount(){
     this.loadCharacter(this.props.character);
  }

  loadCharacter = (character) => {
    fetch(character.url)
      .then(response => {
        return response.json()
      })
      .then(results => {      
        if(!results.films){
          this.setState({
            error: true,
            films: []
          });
        } else {
          this.setState({ loadingFilms: true });
          let filmsResponse = getCharacterFilms(results);
          Promise.all(filmsResponse)
            .then(filmResults => {
              this.setState({
                films: filmResults,
                loadingFilms: false
              });
            })
        }
      }).catch(error => {
        console.log(error);
      });
  }   

  render() {
    const { error, films, loadingFilms } = this.state;
    return  (
      <div>
        <h2>Film Appearances</h2>
        {error && 
          <Alert
            message="Error"
            description="No films found."
            type="error"
            showIcon
          />               
        }
        {loadingFilms && <Spin size="large" />}
        <Film
          films={films}
        />
      </div>
    )
  }
}

export default Character;
