(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */
/***/ (function(module, exports) {

console.log('PWA Test!');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
      console.log('serviceWorker registed!');
    }).catch(function (error) {
      console.log('serviceWorker register failed!');
    });
  });
}

/***/ })
],[[0,1]]]);
//# sourceMappingURL=main.2ad8eb8ad6ccade2092d.chunk.js.map