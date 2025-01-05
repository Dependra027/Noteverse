import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './LoginPopup.css';


const firebaseConfig = {
  apiKey: "AIzaSyBVGmLXPqP3mM4n_5-kaeHpPKH0zZKpySQ",
  authDomain: "notesweb-60b36.firebaseapp.com",
  projectId: "notesweb-60b36",
  storageBucket: "notesweb-60b36.appspot.com",
  messagingSenderId: "273862683776",
  appId: "1:273862683776:web:4ee431f0ab31188917ca65"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const LoginPopup = ({ onClose, setIsLoggedIn, setUsername }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsernameState] = useState('');
  const [password, setPassword] = useState('');
  const [rewritePassword, setRewritePassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  
  useEffect(() => {
    const hasShownLoginPopup = localStorage.getItem('hasShownLoginPopup');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn && !hasShownLoginPopup) {
      const timer = setTimeout(() => {
        setIsRegistering(false); 
        localStorage.setItem('hasShownLoginPopup', 'true'); 
      }, 5000);

      return () => clearTimeout(timer); 
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      const user = userCredential.user;
      setIsLoggedIn(true);
      setUsername(user.email);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', user.email);
      setMessage('Logged in successfully!');
      setTimeout(() => onClose(), 1000);
    } catch (error) {
      setMessage(`Login failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (password !== rewritePassword) {
      setMessage("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setMessage('Registration successful! You can now log in.');
      setTimeout(() => setIsRegistering(false), 2000);
    } catch (error) {
      setMessage(`Registration failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setMessage('');

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setIsLoggedIn(true);
      setUsername(user.displayName || user.email);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', user.displayName || user.email);
      setMessage('Logged in successfully!');
      setTimeout(() => onClose(), 1000);
    } catch (error) {
      setMessage(`Google login failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = () => {
    setIsRegistering(!isRegistering);
    setMessage('');
  };

  return (
    <div className="custom-login-popup">
      <div className="custom-popup-content">
        <button className="custom-close-btn" onClick={onClose}>&times;</button>
        <h2>{isRegistering ? 'New Registration' : 'Login'}</h2>
        <br />
        
        <form onSubmit={isRegistering ? handleRegister : handleLogin}>
          <div className="custom-form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={isRegistering ? email : username}
              onChange={(e) => isRegistering ? setEmail(e.target.value) : setUsernameState(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="custom-form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          {isRegistering && (
            <div className="custom-form-group">
              <label htmlFor="rewrite-password">Rewrite Password:</label>
              <input
                type="password"
                id="rewrite-password"
                value={rewritePassword}
                onChange={(e) => setRewritePassword(e.target.value)}
                required
                placeholder="Rewrite your password"
              />
            </div>
          )}
          <button type="submit" className="custom-login-btn" disabled={loading}>
            {loading ? (
              <span className="loading-spinner"></span>
            ) : (
              isRegistering ? 'Register' : 'Login'
            )}
          </button>
          <button className="google-login-btn" onClick={handleGoogleLogin} disabled={loading}>
            <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google Icon" className="google-icon" />
            Login with Google
          </button>
          {message && <p className="success-message">{message}</p>}
        </form>
        <div className="custom-toggle-link" onClick={handleToggle}>
          {isRegistering ? (
            <span>Already have an account? <strong>Login</strong></span>
          ) : (
            <span>Don't have an account? <strong>Register</strong></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
