import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: '#3b82f6' }}>
      <h1 style={{color:'white'}}>Something went wrong!</h1>
      {/* <button
        style={{ marginTop: '16px', padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
        onClick={reset}
      >
        Try again
      </button> */}
    </div>
  );
}
