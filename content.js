// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        var _data = document.querySelectorAll(".text-success")
        
        _data.forEach(function(item, index){
            console.log(item.innerHTML)
        })
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://book.pairi.app/api/v1/lead_handler", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xhr.send(_data);
      }
    }
  );