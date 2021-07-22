
// document.addEventListener("DOMContentLoaded", function() {
//   alert("Page Loaded");
// }, true);
// document.onmouseup = function() {
//   chrome.tabs.getCurrent(function(_tabId){
//       if(_tabId){
//           var _SELECTION = {};
//           _SELECTION[tabId] = window.getSelection().toString();
//           chrome.storage.local.set(_SELECTION, function() {
//           console.log('Selection saved: ', _SELECTION[tabId]);
//           });
//       }
//   });
// }

// document.addEventListener('onmouseup', function(e){
//   //send message to ext
//   var someInformation = 'cat'
//   chrome.extension.sendMessage(someInformation, function(response) {
//      //callback
//   });
// }, false);


// chrome.browserAction.onmouseup.addListener(function() {
//   chrome.tabs.getCurrent(function(_tabId){
//       if(_tabId){
//           chrome.storage.local.get(_tabId, function(result) {
//               alert('Selection restored: ' + result[tabId].txt);
//           });
//       }

//   });
// })
