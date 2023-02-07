// service worker não tem acesso a todas as features, como utilizar o DO

self.addEventListener('push', function (event) {
    const body = event.data?.text() ?? ''

    event.waitUntil(
        self.registration.showNotification('Habits', {
            body
        })
    )
})