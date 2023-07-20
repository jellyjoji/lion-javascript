function clearContents(node){
  // 보완
  if(typeof node === 'string') node = getNode(node);

  if(node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA'){
    node.value = ''
    return;
  }

  node.textContent = ''
}