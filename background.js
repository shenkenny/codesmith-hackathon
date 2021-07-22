





const re = new RegExp('bear', 'gi')
const matches = document.documentElement.innerHTML.matches(re)
chrome.runtime.sendMessage({
  url: window.location.href,
  count: matches.length
})
// chrome.browserAction.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: reddenPage
//   });
// });
console.log('cat')
// window.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ['content-script.js']
//   });
// });

chrome.tabs.onUpdated.addListener( function (tab) {
  // if (changeInfo.status == 'complete') {

  //   // do your things
  console.log('works')

})

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
