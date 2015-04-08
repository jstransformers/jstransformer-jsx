var Transformer = React.createClass({
  render: function() {
    return (
      <div className="transformer">
        Hello, world! I am Optimus Prime
      </div>
    );
  }
});
React.render(
  <Transformer />,
  document.getElementById('content')
);
