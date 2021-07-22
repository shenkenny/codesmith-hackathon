
document.addEventListener('DOMContentLoaded', function(){
    chrome.storage.local.get( function(items){
       for(let key in items){
          const div = document.createElement('div');
          const span = document.createElement('span');
          const li = document.createElement('li');

          span.innerText="-> "+key;
          span.setAttribute('id', 'span');
          li.innerText=items[key];
          div.appendChild(span);
          div.appendChild(li);
          const last = document.getElementById('wrapper');
          last.appendChild(div);
       }

    });
    let clear = document.getElementById('clear');
    clear.addEventListener('click', function(){
       chrome.storage.local.clear(function() {
          window.location.reload();
       });
    })

});
chrome.storage.onChanged.addListener(function () {
 chrome.storage.local.get( function(items){
    for(let key in items){
       document.getElementById('ttt').innerText=key ;
       document.getElementById('tttt').innerText=items[key] ;
    }
 });});
