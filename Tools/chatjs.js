let x = -1;
let last = "right";
let current = "right";
    function increment() {
      x += 1;
      let textbox = document.getElementById("inp");
      let send = document.getElementById("snd");
      let change = document.getElementById("cng");

      if (x % 2 == 0) {
        textbox.style.borderColor = "green";
        send.style.backgroundColor = "green";
        change.style.backgroundColor = "green";
        current = "right";
        
      } else {
        textbox.style.borderColor = "grey";
        send.style.backgroundColor = "grey";
        change.style.backgroundColor = "grey";
        current = "left";
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

      if (current !== last){
        quote.style.marginTop = "25px";
      }
      else{
        quote.style.marginTop = "5px";
      }
      
      last = current;

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
      .addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          send();
        }
      });

      document.addEventListener("keypress", function (event) {
        if (event.key == "`") {
          increment();
        }
      });
