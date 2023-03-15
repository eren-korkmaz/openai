const APIKEY = "123456";

function ldk(txt){
  
  var metni = "Aşağıdaki metni yeniden yaz.\n" + txt;
    
    var req = new XMLHttpRequest();
    req.open("POST", "https://api.openai.com/v1/chat/completions");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("Authorization", "Bearer " + APIKEY)

    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            //console.log(req.status);
            var res = {}
            
            console.log("Dönüş : " , req.responseText)

            try {
                res = JSON.parse(req.responseText);
            } catch (ex) {
                alert("Hata Oldu: " + ex.message)
            }

            if (res.error && res.error.message) {
              
                alert("Hata Oldu: " + res.error.message)
              
            } else if (res.choices && res.choices[0].message.content) {

                var s = res.choices[0].message.content.trim("\n");
              
                console.log("sonucumuz: " + s)
            }            
        }
    };


    var data = {
        model: "gpt-3.5-turbo",
        messages: [
            { "role": "user", "content": metni }
        ],
        temperature: 0.5,
        max_tokens: 2048,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    };
    //console.log("gönderilen : " , data)
  
    req.send( JSON.stringify( data ) );

}
