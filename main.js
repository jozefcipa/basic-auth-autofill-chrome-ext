chrome.webRequest.onAuthRequired.addListener(
    requestDetails => {
        chrome.notifications.create(`notification-${requestDetails.url}`, {
            type: 'basic',
            iconUrl: 'icon.png',
            title: 'Basic Auth Autofill',
            message: `Authenticated ✅\n${requestDetails.url}`,
        })

        return {
            authCredentials: {
                username: '{USERNAME}',
                password: '{PASSWORD}'
            }
        }
    },
    { urls: ['https://*.example.org/*'] },
    ['blocking'],
)