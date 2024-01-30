let x = -1;
    function increment() {
      x += 1;
      let textbox = document.getElementById("inp");
      let send = document.getElementById("snd");
      let change = document.getElementById("cng");
      let name = document.getElementById("nameplate");
      let first = localStorage.getItem("name1");
      let second = localStorage.getItem("name2");

      if (x % 2 == 0) {
        textbox.style.borderColor = "green";
        send.style.backgroundColor = "green";
        change.style.backgroundColor = "green";
        name.innerHTML = first;
        name.style.color = "green";
      } else {
        textbox.style.borderColor = "grey";
        send.style.backgroundColor = "grey";
        change.style.backgroundColor = "grey";
        name.innerHTML = second;
        name.style.color = "grey";
      }
    }
    increment();

    function crtmsg(data) {
      let textbox = document.getElementById("inp");

      let cont = document.querySelector(".container");

      let quote = document.createElement("div");
      quote.className = "qto";

      let message = document.createElement("div");
      if (x % 2 == 0) {
        message.classList.add("left", "msg");
      } else {
        message.classList.add("right", "msg");
      }

      message.innerHTML = data;

      quote.appendChild(message);

      cont.appendChild(quote);
    }

    function send() {
      let inp = document.getElementById("inp").value;
      if (inp.trim() !== "") {
        crtmsg(inp);
        document.getElementById("inp").value = "";
      }
    }

    document
      .getElementById("inp")
      .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          send();
        }
      });