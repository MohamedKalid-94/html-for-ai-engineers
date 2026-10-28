// Runs in a separate thread. No access to the DOM.
self.onmessage = (event) => {
  const n = event.data;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.sqrt(i);
  }
  self.postMessage(sum);
};