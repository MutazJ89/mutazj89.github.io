self.addEventListener('push', event => {
  const title = 'حان وقت تنظيف الأسنان!';
  const options = {
    body: 'لا تنسَ تنظيف أسنانك.',
    icon: 'toothbrush.png',
  };
  self.registration.showNotification(title, options);
});

self.addEventListener('install', event => {
});

self.addEventListener('notificationclick', async (event) => {
  clients.openWindow("https://www.youtube.com/watch?v=DwpXwSnmAPg")
})

let interval = undefined

addEventListener('message', async (event) => {
  dispatchEvent(new Event('activate'))
})

self.addEventListener('activate', (event) => {
  clearInterval(interval)
  interval = setInterval(() => {
    const currentHour = new Date().getHours();
    // dispatchEvent(new Event('push'))
    if (currentHour === 6 || currentHour === 18) {
      dispatchEvent(new Event('push'))
    }
  }, 60 * 60 * 1000); // كل ساعة
  // }, 10 * 1000); // كل ساعة
})
