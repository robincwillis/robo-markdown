'use strict'

var React = require('react');
var marked = require('marked');

import './Renderer.css';
import './Markdown.css';
import './Highlight.css';

marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false,
	highlight: function (code) {
		return require('highlight.js').highlightAuto(code).value;
	}
});


module.exports = React.createClass({
	render: function(){
		var rawMarkup = marked(this.props.data.toString(), {sanitize: false});
		return	(
			<div className="renderer panel panel-left">
				<span className="markdown-body" dangerouslySetInnerHTML={{__html: rawMarkup}} />
			</div>
		)
	}
});