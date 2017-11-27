function selectElementById(id){
  return document.getElementById(id)
}
function selectElementsByClassName(classname){
  return document.getElementsByClassName(classname)
}

function getFirstSelector(selector){
  return document.querySelector(selector)
}

function rankedLis(){
  let rankedList = document.getElementsByClassName('.ranked-list')
  let rankedLis =  rankedList.querySelectorAll('li')
  return rankedLis
}
