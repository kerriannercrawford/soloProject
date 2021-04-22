import React from 'react';
import axios from 'axios';
import Albums from './Albums.jsx';

class Featured extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
    };
  }
  componentDidMount() {
    axios
      .post('/featured', { limit: 10, country: 'US' })
      .then((data) =>
        this.setState({ tracks: data.data.body.playlists.items })
      );
  }
  renderPlaylists() {
    const newArr = [];
    for (let i = 0; i < this.state.tracks.length; i += 1) {
      newArr.push(<Albums result={this.state.tracks[i]} />);
    }
    return newArr;
  }
  render() {
    return (
      <div className='homePlaylist'>
        {this.state.tracks.length > 0 ? this.renderPlaylists() : 'Loading...'}
      </div>
    );
  }
}

export default Featured;
