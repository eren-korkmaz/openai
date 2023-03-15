<?php


$url = "https://api.openai.com/v1/chat/completions";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$headers = array(
   "Accept: application/json",
   "Authorization: Bearer 123456",
   "Content-Type: application/json",
);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

//json_decode
$data = (json_encode(
      array(
        'model' => 'gpt-3.5-turbo',
        'messages' => array(array(
            'role' => 'user',
            'content' => 'Bu metni yeniden yaz: Bugün hava yağışlı olacak gibi. Şemsiye almayı unutmayın'
        )),
        'temperature' => 0.5,
        'max_tokens' => 2048,
        'top_p' => 1,
        'frequency_penalty' => 0,
        'presence_penalty' => 0
      )
    )
);


curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

//for debug only!
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$resp = curl_exec($curl);
curl_close($curl);
var_dump($resp);




?>
