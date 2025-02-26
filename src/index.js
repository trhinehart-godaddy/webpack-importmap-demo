console.group('Demo');
console.time('Time');
await import(`./demo.js`).then(({ default: demo }) => {
  demo();
});
console.timeEnd('Time');
console.groupEnd();