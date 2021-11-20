let _hmt = window._hmt || [];
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-BM8WXEWW3P');
function track(eventName, title, seed) {
    gtag('event', eventName, {'event_label': title,'seed': seed,'title_seed':title+'_'+seed});
    _hmt.push(['_trackEvent', eventName, 'title', title]);
    _hmt.push(['_trackEvent', eventName, 'title_seed', title+'_'+seed]);
}
window.$ = function (selector) {
    return document.querySelector(selector);
}