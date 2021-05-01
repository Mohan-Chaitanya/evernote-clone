import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { List, Divider } from '@material-ui/core'
import SidebarItemComponent from '../sidebaritem/sidebaritem'

class SidebarComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            addingNote: false,
            title: null
        };
    }

    render() {
        const { notes, selectedNoteIndex } = this.props;

        if (notes) {
            console.log('sidebar', notes);
            return (
                <div className='sidebarDiv'>
                    <button
                        onClick={this.newNoteBtnClick}
                        className='newNoteBtn'>{this.state.addingNote ? 'Cancel' : 'New Note'}</button>
                    {
                        this.state.addingNote ?
                            <div>
                                <input type='text'
                                    className='noteTitle'
                                    placeholder='Enter note title'
                                    onKeyUp={(e) => this.updateTitle(e.target.value)}>
                                </input>
                                <button
                                    className='newNoteSubmitBtn'
                                    onClick={this.newNote}>Submit Note</button>
                            </div> :
                            null
                    }
                    <div>
                        {
                            notes.map((_note, _index) => {
                                return (
                                    <div key={_index}>
                                        <SidebarItemComponent
                                            _note={_note}
                                            _index={_index}
                                            selectedNoteIndex={selectedNoteIndex}
                                            selectNote={this.selectNote}
                                            deleteNote={this.deleteNote}>
                                        </SidebarItemComponent>
                                        <Divider></Divider>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            );
        } else {
            return <div></div>
        }

    }
    newNoteBtnClick = () => {
        console.log('New Note Btn');
        this.setState({ title: null, addingNote: !this.state.addingNote });

    }

    updateTitle = (txt) => {
        console.log('here the is', txt)
        this.setState({ title: txt });
    }

    newNote = () => {
        this.props.newNote(this.state.title);
        this.setState({ title: null, addingNote: false })
    }

    selectNote = (n, i) => { this.props.selectNote(n, i) };
    deleteNote = (note) => { this.props.deleteNote(note) };
}

export default SidebarComponent;