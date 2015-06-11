'use strict'

var React = require('react');

import './Editor.css';
//import './fixture';


module.exports = React.createClass({

	getInitialState: function() {
		var example = require("./fixture.js");
		return {value: example};
	},

	componentDidMount: function () {
	    this.handleKeyUp();
	},

	render: function(){
		var value = this.state.value;
		return (
			<div className="editor panel panel-right">
				<textarea
					value={value}
					onChange={this.handleChange}
					onKeyDown={this.handleKeyDown}
					onKeyUp={this.handleKeyUp}
					ref="textarea">
				</textarea>
			</div>
		)
	},

	handleChange: function(e) {
		this.setState ({value: e.target.value});
	},

	handleKeyDown: function(e){
		var keyCode = e.keyCode || e.which;
		//Override TAB to indent
		if (keyCode == 9) {
			e.preventDefault();
			var selectionStart = e.target.selectionStart;
			var selectionEnd = e.target.selectionEnd;
			var value = e.target.value.substring(0, selectionStart) + '\t' + e.target.value.substring(selectionEnd);
			this.setState ({value: value }, function(){
				React.findDOMNode(this.refs.textarea).setSelectionRange(selectionEnd+1,selectionEnd+1);
			});
		}
	},

	handleKeyUp: function(e) {
		this.props.text = this.state.value;
		this.props.onKeyUp(this);
	}

});