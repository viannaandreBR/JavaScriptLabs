axios.get('https://api.github.com/users/viannaandreBR')
  .then(function(response) {
    console.log(response);
    document.write('nome ---->',response.data.name);
    console.log(response.data.avatar_url);
  })
  .catch(function(error) {
    console.warn(error);
  });