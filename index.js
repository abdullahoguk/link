LINKSSOURCE="https://raw.githubusercontent.com/abdullahoguk/assets/main/shortlinks.json"
fetch(LINKSSOURCE)
.then(function(res){return res.json()})
.then(function(data){
  URLMap=data
  location.href = window.URLMap[location.pathname];
})

