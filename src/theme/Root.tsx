import { useState } from 'react';

const p = [
  { u: 'test-user', p: 'secret-pass' },
];

export default function Root({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = p.find(
      (p) => p.u === username && p.p === password
    );
    if (user) {
      setIsAuthenticated(true);
    } else {
      alert('Identifiants invalides, veuillez réessayer.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        <form onSubmit={handleLogin} style={{ textAlign: 'center' }}>
          <h2>Entrez vos identifiants</h2>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              placeholder="Utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: '8px 16px',
              backgroundColor: '#055e8e',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Se connecter
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}   