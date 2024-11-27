// Prevent URL manipulation 

if (window.history && window.history.pushState) {
    window.history.pushState('', null, './');
    window.addEventListener('popstate', function() {
        window.history.pushState('', null, './');
    });
}