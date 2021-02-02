import React from 'react'
import './Playlists.css'
import {TrackList} from '../TrackList/TrackList'
export class Playlists extends React.Component{
    constructor(props){
        super(props);
        this.handleNameChange=this.handleNameChange.bind(this);
    }
    handleNameChange({target}){
        this.props.onNameChange(target.value);
    }
    render(){
        return (
            <div className="Playlist">
                <input placeholder={'New Playlist'} onChange={this.handleNameChange}/>
                <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }

}