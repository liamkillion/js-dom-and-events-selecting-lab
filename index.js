function getFirstSelector(s) {
  return document.querySelector(s)
}

function rankedLis() {
  return document.querySelectorAll('.ranked-list li')
}

function selectElementById(id){
  return document.getElementById(id)
}

function selectElementsByClassName(className){
  return document.getElementsByClassName(className)
}

function companyStrategy() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}
