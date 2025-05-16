import React from 'react';

function App() {
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>ImpactAI Hackathon</h1>
      <p>백엔드 메시지: {message}</p>
    </div>
  );
}

export default App;
