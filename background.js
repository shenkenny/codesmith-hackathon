
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   bears[request.url] = request.count
//   console.log(request.count)
// }
// )

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
      title: 'Highlighter',
      id: 'menu1', // you'll use this in the handler function to identify this context menu item
      contexts: ['selection'],
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "menu1") { // here's where you'll need the ID
      console.log("info:",info)
      console.log("tab:",tab)
  }
});
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
