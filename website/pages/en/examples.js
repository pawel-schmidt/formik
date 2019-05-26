const React = require('react');

class Examples extends React.Component {
  render() {
    return (
      <iframe
        src="https://festive-wozniak-c71293.netlify.com"
        style={{
          width: '100%',
          height: '500px',
          border: 0,
          borderRadius: 4,
          overflow: 'hidden',
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    );
  }
}

module.exports = Examples;
