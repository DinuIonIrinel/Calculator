function insert(count) {
  document.form.textview.value = document.form.textview.value + count
}
function clean() {
    document.form.textview.value = "";
}
function equal() {
  var expr = document.form.textview.value;
  document.form.textview.value = eval(expr);
}
function back() {
  var expr = document.form.textview.value;
  document.form.textview.value = expr.substring(0,expr.length-1);
}
