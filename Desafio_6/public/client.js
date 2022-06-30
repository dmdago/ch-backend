const socket = io.connect();

socket.on("messages", function (data) {
  render(data);
});

function render(data) {
  let html = data
    .map(function (element, index) {
      return `<div>
              <b style="color:blue;">${element.author}</b>:
              <span style="color:brown;">[${element.date}]</span>
              <i style="color:green;">${element.text}</i>
              </div>`;
    })
    .join("");
  document.getElementById("messages").innerHTML = html;
}

function addMessages() {
  let author = document.getElementById("author").value;
  let text = document.getElementById("text").value;

  if (author === "" || text === "") {
    return;
  } else {
    var message = {
      author: author,
      text: text,
    };

    socket.emit("new-message", message);
  }
}
