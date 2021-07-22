
document.addEventListener('DOMContentLoaded', function(){
    chrome.storage.local.get( function(items){
       for(let key in items){
          const div = document.createElement('div');
          const ul = document.createElement('ul');
          const h4 = document.createElement('h4');

          h4.innerHTML ="<h4>"+key+"</h4>";
          div.appendChild(h4);
          items[key].forEach((el) => {
            const li = document.createElement('li');
            li.innerHTML= el + '\n\n';
            li.style.fontStyle='italic'
            ul.appendChild(li);
          })

          const last = document.getElementById('wrapper');
          last.appendChild(div);
          last.appendChild(ul)
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
