

const re = new RegExp('bear', 'gi')
const matches = document.documentElement.innerHTML.matches(re)
chrome.runtime.sendMessage({
  url: window.location.href,
  count: matches.length
})
