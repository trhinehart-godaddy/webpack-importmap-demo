import React from 'react';
import ReactDOMClient from 'react-dom/client';

export default function() {
  console.log('Loaded react@%s from %o', React.version, import.meta.resolve('react'));
  console.log('Loaded react-dom@%s/client from %o', ReactDOMClient.version, import.meta.resolve('react-dom/client'));

  requestAnimationFrame(() => {
    const root = ReactDOMClient.createRoot(document.body);
    root.render(React.createElement('h1', null, 'Hello World!'));
  });
}