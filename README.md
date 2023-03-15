# OpenAi and Chatgpt
Openaai and Chatgpt requests without any library




if you are not going to use chatgpt

##completions
for "https://api.openai.com/v1/completions" change data like this. (response also change)

var data = {
        model: 'text-davinci-003',
        prompt: 'merhaba nasılsın open ai',
        max_tokens: 2048,
        user: "1",
        temperature:0.5,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["#", ";"]
    }
    
    
##edits
for "https://api.openai.com/v1/edits" change data like this. (response also change)

var data = {
        model: "text-davinci-edit-001",
      input: "Burada bir yazm yanlışı varmı?",
      instruction: "Yazım yanlışlarını düzelt.",
      temperature: 0.7,
      top_p: 1,
    }
