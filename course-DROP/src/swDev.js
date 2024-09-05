export default function swDev() {
  const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

  // Check if service workers are supported
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(swUrl)
      .then((registration) => {
        console.log('Service Worker registered successfully:', registration);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  } else {
    console.warn('Service Workers are not supported in this browser.');
  }
}
