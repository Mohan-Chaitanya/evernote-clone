import React from 'react'
import ReactQuill from 'react-quill'
import borderColorIcon from '@material-ui/icons/BorderColor'
import { withStyles } from "@material-ui/core/styles"
import _ from 'lodash'
import { Update } from '@material-ui/icons'
import debounce from '../helper'
import EditIcon from '@material-ui/icons/Edit';

import styles from './styles';

class EditorComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            title: '',
            id: ''
        }
    }

    componentDidMount = () => {
        this.setState({
            text: this.props.selectedNote.body,
            title: this.props.selectedNote.title,
            id: this.props.selectedNote.id
        });
    }

    componentDidUpdate = () => {
        if (this.props.selectedNote.id !== this.state.id) {
            this.setState({
                text: this.props.selectedNote.body,
                title: this.props.selectedNote.title,
                id: this.props.selectedNote.id
            });
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <input className='headingBar'
                    placeholder='Note Title...'
                    value={this.state.title ? this.state.title : ''}
                    onChange={(e) => this.updateTitle(e.target.value)} ></input>
                <ReactQuill
                    value={this.state.text}
                    onChange={this.updateBody}>
                </ReactQuill>
            </div>
        )
    }

    updateTitle = async (txt) => {
        await this.setState({ title: txt });
        this.update()
    }

    updateBody = async (val) => {
        await this.setState({ text: val });
        this.update();
    };
    update = debounce(() => {
        this.props.noteUpdate(this.state.id, {
            title: this.state.title,
            body: this.state.text
        })
    }, 1500);
}

export default EditorComponent;
// const EditorComponent = (props) => {

//     const [text, setText] = useState('');
//     const [title, setTitle] = useState('');
//     const [id, setId] = useState('')

//     const { classes } = props;

//     useEffect(() => {
//         setTitle(title)
//     }, [])

//     const updateBody = async (e) => {
//         const inputData = removeHTMLTags(e);
//         await console.log(inputData);
//         delayedQuery();
//     };

//     const delayedQuery = useCallback(_.debounce(() => update(), 2000), [])

//     const update = () => {
//         console.log('Updated DB')
//     }

//     return (
//         <div className='quillStyle'>
//             <ReactQuill value={text} onChange={updateBody} />
//         </div>
//     )
// }

// export default (EditorComponent)