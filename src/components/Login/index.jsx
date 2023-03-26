import styles from './login.module.css';
import { useState } from 'react';

export function Login() {
  const [isChecked, setIsChecked] = useState(false);

  const handleLoginClick = () => {
    setIsChecked(!isChecked);
  };
  const handleSignUpClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={styles.main}>
      <input type="checkbox" className={styles.checkbox} aria-hidden="true" checked={isChecked} />

      <div className={styles.signup}>
        <form action="">
          <label htmlFor="checkbox" aria-hidden="true" onClick={handleSignUpClick}>
            Sign Up
          </label>
          <input type="text" name="text" placeholder="Username" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />

          <button>Sign Up</button>
        </form>
      </div>

      <div className={styles.login}>
        <form action="">
          <label htmlFor="checkbox" aria-hidden="true" onClick={handleLoginClick}>
            Login
          </label>

          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />

          <button>Login</button>
        </form>
      </div>
    </div>
  );
};
        