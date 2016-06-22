function getTargetOrSrcElement(e) {
  var ele;
  if (e.target) {
    ele = e.target;
  } else if (e.srcElement) {
    ele = e.srcElement;
  }
  return ele;
}

function byId(id) {
  return document.getElementById(id);
}

function log(data) {
  console.log(data);
  return '--------';
}