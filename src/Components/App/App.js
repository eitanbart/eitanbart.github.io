//import logo from '../logo.svg';
import './App.css';
import React from 'react'
import {SearchResults} from '../SearchResults/SearchResults';
import { Playlists } from '../Playlists/Playlists';
import { SearchBar } from '../SearchBar/SearchBar';
import {Spotify} from '../../util/Spotify';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {searchResults:[],
    playlistName: 'New Playlist',
    playlistTracks: []
  }
  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  this.updatePlaylistName=this.updatePlaylistName.bind(this);
  this.savePlaylist=this.savePlaylist.bind(this);
  this.search=this.search.bind(this);
  }

  addTrack(track){
    if (this.state.playlistTracks.find(song=>
        song.id===track.id)){
        return;
    }
    this.setState((prev)=>({playlistTracks:this.state.playlistTracks.concat(track)}));
    
  }

  removeTrack(track){
    let newArr = this.state.playlistTracks.filter(tr=>{
      return track.id!==tr.id;
    })
    this.setState({playlistTracks:newArr})
  }

  updatePlaylistName(name){
    this.setState({playlistName:name})
  }

  savePlaylist(){
    const trackUris=this.state.playlistTracks.map(track=>{
      return track.uri;
    })
      Spotify.savePlaylist(this.state.playlistName,trackUris).then( ()=>{
        this.setState({
          playlistName: 'New Playlist',
          playlistTracks: []
      
      })
    })
      
  }

  search(term){
    Spotify.search(term).then(searchRes=> {
      this.setState({searchResults: searchRes});
      
    })

  }

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlists onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
