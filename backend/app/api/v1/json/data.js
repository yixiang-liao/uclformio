if (data["panelTable2"] === true && data["panelTable14"]) {
  var url =
    `http://127.0.0.1:8000/api/v1/project1_3_vendor/` +
    "1" +
    "/" +
    data.panelTable14;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send();
  value = parseInt(xhr.responseText) || 0;
} else {
  value = 0;
}