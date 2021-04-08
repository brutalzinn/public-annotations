//08/04/2021-16:03 robertocpaes.dev
const options = {
  url:  pm.environment.get('auth_url'), 
  method: 'POST',
  header: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
body: {
    mode: 'urlencoded',
    urlencoded : [
      { key: 'email', value: 'meulogin'},
      { key: 'senha', value: 'minhasenha'},
    ]
  }
};
pm.sendRequest(options, function (err, res) {
	//token_key is a environment variable to get the request working in all routes..
    pm.environment.set("token_key", res.json().token);
});

    

