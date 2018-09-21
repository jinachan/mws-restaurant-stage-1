/* Register service worker
 * Credit: Doug Brown's webinar
 * Source: https://youtu.be/92dtrNU1GQc
 */

 if ('serviceWorker' in navigator) {
     navigator.serviceWorker
        .register('/sw.js') 
        .then(reg => {
            console.log('Service worker registration successful: ' + reg.scope);
        })
        .catch(error => {
            console.log('Registration failed: ' + error);
        });
 }