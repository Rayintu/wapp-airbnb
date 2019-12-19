export function setAccountTokenAction(token) {
  return {
    type: 'setAccountTokenAction',
    value: token
  }
}

export function getAccountTokenDispatcher(username, password) {
  return async (dispatch) => {
    // const details = {
    //   grant_type: 'password',
    //   username: username,
    //   password: password,
    //   client_id: 'client',
    //   client_secret: 'secret',
    //   scope:  'openid api1'
    // }

    // const details = {
    //   grant_type: 'password',
    //   username: 'root',
    //   password: 'root',
    //   client_id: 'client',
    //   client_secret: 'secret',
    //   scope: 'openid api1'
    // }

    // var formBody = [];
    // for (var property in details) {
    //   var encodedKey = encodeURIComponent(property);
    //   var encodedValue = encodeURIComponent(details[property]);
    //   formBody.push(encodedKey + "=" + encodedValue);
    // }
    // formBody = formBody.join("&");

    var searchParams = new URLSearchParams();
    searchParams.append('grant_type', 'password')
    searchParams.append('username', 'root')
    searchParams.append('password', 'root')
    searchParams.append('client_id', 'client')
    searchParams.append('client_secret', 'secret')
    searchParams.append('scope', 'openid api1')

    var response = await fetch('localhost:5002/connect/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: searchParams
    });

    var body = await response.json()
    if(response.ok) dispatch(setAccountTokenAction(body.acces_token));
  }
}