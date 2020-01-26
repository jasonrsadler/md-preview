import React, { Component } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import './css/App.css'

class App extends Component {
  constructor(props) {
    super(props)

    /*
    epresents at least one of each of the
    following elements: a header (H1 size),
    a sub header (H2 size), a link, inline code,
    a code block, a list item, a blockquote, an image, and bolded text. */
    const md = '# Header\n## Sub-header\n[This is a link](https://www.google.com)\n`inline code`\n```\nmultiple lines\nof code\n```\n* A list item\n>A blockquote\n>of text\n# Image: Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")\n## Finally **bolded text**'
    this.state = {
      editorValue: md,
      previewValue: md
    }
  }

  onChange = (event) => {
    this.setState({
      previewValue: event.target.value
    })
  }

  render() {
    return (
      <div className="app-padding">
        <Editor onChange={this.onChange} editorValue={this.state.editorValue}/>
        <Preview value={this.state.previewValue}/>
      </div>
    );
  }
}

export default App;
