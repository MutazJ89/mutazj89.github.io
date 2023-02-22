self.addEventListener('push', event => {
  const title = 'حان وقت تنظيف الأسنان!';
  const options = {
    body: 'لا تنسَ تنظيف أسنانك.',
    icon: 'toothbrush.png'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
