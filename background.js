
// On spin up of the chrome runtime
chrome.runtime.onInstalled.addListener(function() {
  // Create a right click menu item
  chrome.contextMenus.create({
      title: 'Highlight',
      id: 'menu1', // you'll use this in the handler function to identify this context menu item
      contexts: ['selection'],
  });
});

// On the clicked event for the context menu do something
// chrome.contextMenus.onClicked.addListener(function(info, tab) {
  // if (info.menuItemId === "menu1") { // here's where you'll need the ID

  //   let obj={};

  //   const url = info.pageUrl;
  //   const val = info.selectionText;

  //   // Queries and fetches current window id

  //   function getTabID() {
  //     return new Promise((resolve, reject) => {
  //         try {
  //             chrome.tabs.query({
  //               active: true,
  //               currentWindow: true
  //             }, function (tabs) {
  //               console.log(tabs)
  //                 resolve(tabs[0].id);
  //                 console.log('query complete')
  //             })
  //         } catch (e) {
  //             reject(e);
  //         }
  //     })
  // }

//   // async function sendMessage() {
//   //   let responseTabID = await getTabID();
//   //   console.log('responsetab',responseTabID)
//   //   try {
//   //     await chrome.tabs.sendMessage(responseTabID,val);
//   //     console.log('message sent')
//   //     // chrome.tabs.executeScript(tab.id,{
//   //     // code: (function() {'document.body.innerHTML = document.body.replace("Bears", "Hi")'})()

//   //     }
//   //   catch (err) {
//   //     console.log(err);
//   //   }}
//   //   sendMessage();
//   }
// });

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "menu1") { // here's where you'll need the ID
    let obj={};
    const newArr =[];
      const url = info.pageUrl;
      const val = [];
        val.push(info.selectionText);
       chrome.storage.local.get( function(items){
        if(items[url]){
          items[url].forEach(element => {
            newArr.push(element);
          });

          newArr.push(info.selectionText);
          obj[url] = newArr;
          chrome.storage.local.remove(url, function() {

           });
          chrome.storage.local.set(obj, function() {
          });
        }
        else{
          obj[url] = val;
         chrome.storage.local.set(obj, function() {
         });
        }
      });

      chrome.storage.local.get( function(items){
       // console.log(items);
      });
  }

});
