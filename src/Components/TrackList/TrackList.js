import React from 'react'
import {Track} from '../Track/Track'
import './TrackList.css'
export class TrackList extends React.Component{
    render(){
        return (
            <div className="TrackList">
            { 
                this.props.tracks.map((track) => {
                    return <Track onRemove={this.props.onRemove} key={track.id} info={track} onAdd={this.props.onAdd} isRemoval={this.props.isRemoval}/>
                })

             }
            </div>
        )
    }
}