function replace_css(id,url){  if(!document.getElementById) return false;  var element = document.getElementById(id);  if(!element || !element.cloneNode) return false;  var new_node = element.cloneNode(true);  new_node.href = url;  element.parentNode.replaceChild(new_node,element);  return true;}