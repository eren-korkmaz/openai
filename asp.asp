<%

'TLS 1.2 req

data = "{" & _
        "model: ""gpt-3.5-turbo""," & _
        "messages: [" & _
            "{ ""role"": ""user"", ""content"": ""Aşağıdaki metni yeniden yaz.\n Bugün hava yağışlı olacak gibi. Şemsiye almayı unutmayın"" }" & _
        "]," & _
        "temperature: 0.5," & _
        "max_tokens: 2048," & _
        "top_p: 1," & _
        "frequency_penalty: 0," & _
        "presence_penalty: 0" & _
    "}"

            
            
    Set objHTTP = Server.CreateObject("Msxml2.ServerXMLHTTP.6.0")
    objHTTP.SetTimeouts 600000, 600000, 600000, 600000
	objHTTP.open "POST", "https://api.openai.com/v1/chat/completions", false
	objHTTP.setRequestHeader "content-type", "application/json"
	objHTTP.setRequestHeader "Accept", "application/json"
	objHTTP.setRequestHeader "Authorization", "Bearer 123456"
	objHTTP.send(data)
	gnr_xmlhttp_request = objHTTP.responsetext
  %>
