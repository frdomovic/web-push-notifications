self.addEventListener('push', function(e) {
    var options = {
        body: 'This notification was generated',
        vibrate: [100, 50, 100],
        date: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {action: 'explore', title: 'Explore this new world',
            icon: 'images/checkmark.png'},
            {action: 'close', title: 'Close',
                icon: 'images/xmark.png'},
        ]
        
    };
    e.waitUntil(
        self.ServiceWorkerRegistration.showNotification('hello ',options)
    )
});
