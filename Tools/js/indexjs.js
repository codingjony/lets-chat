let t1 = document.getElementById("t1");
    let t2 = document.getElementById("t2");
    function clrr() {
      t1.value = "";
      t2.value = "";
    }
    function sub() {
      if (t1.value == "" && t2.value == "") {
        alert("PLEASE ENTER DATAS");
      } else if (t1.value == "") {
        alert("Please Enter 1st Name");
      } else if (t2.value == "") {
        alert("Please Enter 2nd Name");
      } else {
        localStorage.setItem("name1", t1.value);
        localStorage.setItem("name2", t2.value);
        window.open("Tools/chat.html", "_self");
        clrr();
      }
    }