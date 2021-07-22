
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

// chrome.browserAction.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: reddenPage
//   });
// });
// window.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ['content-script.js']
//   });
// });


// chrome.tabs.getCurrent(function(tab){
//   let tabId = tab.id;
//   console.log('This is our tab', tabId);

// });

window.addEventListener('onmouseup', function(e) {
  console.log( 'skgfhdjkfsd');
   // chrome.tabs.getCurrent(function(tab){
   //   let tabId = tab.id;
   //   let tabUrl = tab.url;
   //       if(tabId){
   //           let _SELECTION = {};
   //             _SELECTION[tabId][tabUrl] = window.getSelection().toString();
   //             chrome.storage.local.set(_SELECTION, function() {
   //             console.log('Selection saved: ', _SELECTION[tabId]);
   //             });
   //       }
   // });
 });


// (function() {

// 	// just place a div at top right
// 	var div = document.createElement('div');
// 	div.style.position = 'fixed';
// 	div.style.top = 0;
// 	div.style.right = 0;
// 	div.textContent = 'Injected!';
// 	document.body.appendChild(div);

// 	alert('inserted self... giggity');

// })();
