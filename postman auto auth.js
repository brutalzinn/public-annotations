const email =  () => { return { key: 'email', value: pm.environment.get('email')}}
const username =  () => { return { key: 'username', value: pm.environment.get('username')}}
const type =  () => {
return pm.environment.get('email') ? { key: 'email', value: pm.environment.get('email')} : { key: 'username', value: pm.environment.get('username')}
} 
const options = {
  url:  pm.environment.get('auth_url'), 
  method: 'POST',
  header: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
body: {
    mode: 'urlencoded',
    urlencoded : [
    { key: type().key, value: type().value },
    { key: 'senha', value: pm.environment.get('senha')}
    ]
  }
};
pm.sendRequest(options, function (err, res) {
    pm.environment.set("token_key", res.json().token);
});