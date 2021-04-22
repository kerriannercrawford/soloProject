import React from 'react';

export default function Track(props) {
  return (
    <div className='trackContainer'>
      <div className='trackImg'>
        <img src={props.result.album.images[2].url} />
      </div>
      <div className='trackInfo'>
        <p>
          <b>Song Name:</b> {props.result.name}
          <br />
          <b>Artist:</b> {props.result.artists[0].name}
        </p>
      </div>
      <div className='trackSubmit'>
        <button onClick={() => props.addSong(props.result)}>
          Add to Playlist
        </button>
      </div>
    </div>
  );
}
