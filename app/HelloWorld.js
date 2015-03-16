var React = require('react');

var HelloWorld = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Hello world</h1>
                HelloWorld module.<br />
                HelloWorld.js
            </div>
        )
    }
});

module.exports = HelloWorld;