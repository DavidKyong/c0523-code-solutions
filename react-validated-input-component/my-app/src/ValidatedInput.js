import { useState } from 'react';

export default function ValidatedInput({ text }) {
  const [password, setPassword] = useState('');

  return (
    <div>
      <div>Password</div>
      <label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <span>
          {password.length === 0 ? (
            <i className="fa-solid fa-xmark" style={{ color: 'red' }} />
          ) : password.length <= 8 ? (
            <i className="fa-solid fa-xmark" style={{ color: 'red' }} />
          ) : (
            <i
              className="fa-duotone fa-check fa-lg"
              style={{ color: 'green' }}
            />
          )}
        </span>
      </label>
      {password.length === 0 && (
        <p style={{ color: 'red' }}>A password is required.</p>
      )}
      {password.length > 0 && password.length <= 8 && (
        <p style={{ color: 'red' }}>Your password is too short.</p>
      )}
    </div>
  );
}
