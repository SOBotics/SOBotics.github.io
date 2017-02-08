document.addEventListener("DOMContentLoaded", function(event) {
  addElements(document.getElementById('mainNav'), 1);
});

function addElements(parentContainer, index, id) {
  var els = document.querySelectorAll("h" + index + (index === 1 ? "" : "[id^='" + id + "']"));
  if (els.length > 0) {
    var ul = document.createElement('ul');
    [].forEach.call(els, function(el) {
      var li = document.createElement('li');
      var lk = document.createElement('a');
      lk.setAttribute('href', '#' + el.getAttribute('id'));
      lk.innerHTML = el.innerHTML;
      li.appendChild(lk);
	  if (index < 5) addElements(li, index + 1, el.getAttribute('id') + '-');
      ul.appendChild(li);
    });
    parentContainer.appendChild(ul);
  }
}
