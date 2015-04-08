var Transformer = React.createClass({displayName: "Transformer",
  render: function() {
    return (
      React.createElement("div", {className: "transformer"}, 
        "Hello, world! I am Optimus Prime"
      )
    );
  }
});
React.render(
  React.createElement(Transformer, null),
  document.getElementById('content')
);
