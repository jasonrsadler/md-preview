import React, { Component } from "react";
import createDomPurify from 'dompurify'
import marked from 'marked'
import './css/Preview.css'

const domPurify = createDomPurify(window)

class Preview extends Component {
  render () {
    const { value } = this.props
    return (
      <div id="preview" className="preview" dangerouslySetInnerHTML={{__html: domPurify.sanitize(marked(value, { breaks: true, gfm: true}))}}>
      </div>
    )
  }
}

export default Preview
