import logo from './logo.svg'
import './App.css'
import React from 'react'

function App() {
  const currentYear = new Date().getFullYear()

  const header = React.createElement('header', { className: 'App-header' },
    React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
    React.createElement('p', null, 'Edit ', React.createElement('code', null, 'src/App.js'), ' and save to reload.'),
    React.createElement('a', {
      className: 'App-link',
      href: 'https://reactjs.org',
      target: '_blank',
      rel: 'noopener noreferrer'
    }, 'Learn React'),
    React.createElement('p', null, 'Current Year: ', currentYear)
  );

  const app = React.createElement('div', { className: 'App' }, header);

  return app;
}

export default App;
