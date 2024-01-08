// github: omar-bakhsh
function send_handle(){

    let num=document.getElementById("number").value;
  
    let msg= document.getElementById("msg").value;
  
      let name= document.getElementById("name").value;
    
    var win = window.open(`https://wa.me/${num}?text=I%27m%20api%20msg%20hello%20${name}%20friend%20${msg}`, '_blank');
   // win.focus();
  }





  async function send(){

    data = {
      name : "abdo",
      password : "nader"
    }

    getFunction = await fetch("https://6598e1f5a20d3dc41cef0674.mockapi.io/clinets",{
      method : 'POST',
      body: JSON.stringify(data),
      headers: {'Content-type': 'application/json'}
    })

    getFunction = await fetch("https://6598e1f5a20d3dc41cef0674.mockapi.io/clinets")
    response = await getFunction.json()
    console.log(response)
    
  }

  send()