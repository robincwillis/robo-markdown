var React = require('react');
var Editor = require('./Editor');
var Renderer = require('./Renderer');

module.exports = React.createClass({

    getInitialState: function() {
        return {data: ""};
    },

    render : function() {
    	return(
		 	<div>
			 	<h1 className="title">Robo Markdown</h1>
                <Editor onKeyUp={this.handleTextInput} />
                <Renderer data={this.state.data} text="aslfafdijl" />
		 	</div>
        )
    },

    handleTextInput: function(editor){
        this.setState({data: editor.props.text});
    }
})