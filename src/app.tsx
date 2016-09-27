/**
 * Created by ry29 on 22.08.16.
 */

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var MyNewElement = React.createClass({
    render: function(){
        return <div class="{this.props.classname}">Hello Worldaaa {this.props.classname}</div>
    }
});

console.log(ReactDOMServer.renderToString(<MyNewElement classname="blubb"/>));
