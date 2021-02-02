import React from 'react'
import './Track.css'
export class Track extends React.Component{
    constructor(props){
        super(props);
        this.addTrack=this.addTrack.bind(this);
        this.removeTrack=this.removeTrack.bind(this);
        this.state={isRemoval:this.props.isRemoval}
    }

    renderAction(){
        if (this.state.isRemoval){
            return <button className="Track-action" onClick={this.removeTrack}>-</button>
        }
        else { return <button className="Track-action" onClick={this.addTrack}>+</button>}
    }

    removeTrack(){
        this.props.onRemove(this.props.info);
    }

    addTrack(){
        this.props.onAdd(this.props.info);
    }

    render(){
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.info.name}</h3>
                    <p>{this.props.info.artist} | {this.props.info.album}</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}