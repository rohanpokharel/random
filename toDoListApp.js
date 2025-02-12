let list = document.getElementById("text");
        let ol = document.getElementById("uList");
        function makeList(){
          let listValue = list.value.trim();
          listValue = upperCase(listValue);
          let li = document.createElement("li");
          if(list.value.trim()==="") return;
          ol.appendChild(li);
          li.innerHTML = `<div><span>${listValue}</span> <button class="delete">X</button></div>`
          list.value = "";
          
          li.querySelector(".delete").addEventListener("click",function(){
            li.remove();
          })
        }
        function upperCase(string){
       string = string[0].toUpperCase() + string.slice(1);
       return string;
        }
        list.addEventListener("keypress",function(event){
            if(event.key==="Enter"){
                event.preventDefault();
                makeList();
            }
        })