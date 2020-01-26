import React, { Component } from 'react'
import './css/Editor.css'

class Editor extends Component {
  render() {
    return (
      <div>
        <textarea
          id="editor"
          className="editor"
          onKeyUp={this.props.onChange}
          defaultValue={this.props.editorValue}>
        </textarea>
      </div>
    )
  }
}

export default Editor
