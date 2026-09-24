import { useRef } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useFetch } from '../hooks/useFetch.js';

export default function Dashboard() {
  const { user } = useAuth();
  const { data: messages, loading, error, refetch } = useFetch('/contact');
  const panelRef = useRef(null);

  const scrollToPanel = () => {
    panelRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section>
      <h1>Dashboard</h1>
      <p>Welcome back{user?.name ? `, ${user.name}` : ''}.</p>
      <button className="btn" onClick={scrollToPanel}>Jump to messages</button>

      <div ref={panelRef} style={{ marginTop: '2rem' }}>
        <div className="card" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Contact messages</h3>
          <button className="btn" onClick={refetch}>Refresh</button>
        </div>
        {loading && <p>Loading…</p>}
        {error && <p className="error-text">{error}</p>}
        {messages?.map((m) => (
          <div className="card" key={m._id}>
            <strong>{m.name}</strong> ({m.email})
            <p>{m.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}