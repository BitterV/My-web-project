import React, { useState } from 'react';
import styles from './style.module.css';
import { useLocalStorage } from '../hook/useLocalStorage';
import { Link } from 'react-router-dom';

const Home = () => {
  const [user, setUser] = useLocalStorage('USER', '');
  const [password, setPassword] = useLocalStorage('PASSWORD', '');
  const [email, setEmail] = useLocalStorage('EMAIL', '');

  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState({ username: '', email: '', password: '' });

  const handleSubmit = () => {

    setError({ username: '', email: '', password: '' });

    let isValid = true;


    if (!inputValue) {
      setError((prevError) => ({ ...prevError, username: 'Имя пользователя обязательно для заполнения' }));
      isValid = false;
    }


    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!email || !emailRegex.test(email)) {
      setError((prevError) => ({ ...prevError, email: 'Введите корректный email' }));
      isValid = false;
    }


    if (password.length < 6) {
      setError((prevError) => ({ ...prevError, password: 'Пароль должен быть длиной не менее 6 символов' }));
      isValid = false;
    }

    if (isValid) {
      setUser(inputValue);
    }
  };

  return (
    <div>
      <div>
        {user && (
          <div>
            <div>Greating you, dear {user}</div>
            <button onClick={() => setUser('')}>Cancel</button>
          </div>
        )}

        {!user && (
          <div className={styles.homecont}>
            <h1>Login</h1>
            <div className={styles.item}>
              <input
                type="text"
                placeholder="Username"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className={styles.error}>{error.username}</div>
            </div>

            <div className={styles.item}>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <div className={styles.error}>{error.email}</div>
            </div>

            <div className={styles.item}>
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <div className={styles.error}>{error.password}</div>
            </div>

            <button onClick={handleSubmit} className={styles.homebtn}>
              Sign in
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;