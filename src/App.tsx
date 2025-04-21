import Logo from './assets/logo.svg?react';
import './shared/styles';

function App() {
  return (
    <main>
      <Logo />
      <p style={{ color: 'var(--light-color-background-brand-primary)' }}>
        Hello, Dima!
      </p>
    </main>
  );
}

export default App;
