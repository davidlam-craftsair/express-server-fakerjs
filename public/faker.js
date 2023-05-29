const faker = require('@faker-js/faker');
// implement button onclick which call add()
function add() {
  // setup
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const date = faker.date.past(50, new Date("Sat Sep 20 1992 21:35:02 GMT+0200 (CEST)"));

  // random data
  const name = faker.name.findName(firstName, lastName);
  const email = faker.internet.email(firstName, lastName);
  const username = faker.internet.userName(firstName, lastName);
  const password = faker.internet.password();
  const phone = faker.phone.phoneNumber();
  const streetaddress = faker.addres.streetAddress();
  const citystatezip = faker.address.city() + ", " + faker.address.stateAbbr() + " " + faker.address.zipCode();
  const latitude = faker.address.latitude();
  const longitude = faker().address.longitude();
  const avatar = faker.internet.avatar();
  const dob = date.getfullyear() + "-" + (date.getmonth() + 1) + "-" + date.getDate();


  // user object  
  const user = {
    name, dob, email, username, password, phone, streetaddress, citystatezip, latitude, longitude, avatar
  };


  // post user
  const url = 'http://localhost:3001/add';
  superagent
    .post(url)
    .send(user)
    .end(function(err, res) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(res);
        if (res.statusCode === 200) {
          document.getElementById('status').innerHTML = `
<b>Response: Status Code 200. </b> The HTTP 200 OK success status response code indicates that the HTTP request has succeeded.</br>
User: ${name}<br>
  ${new Date()}
`;
        }

      }
    });

}

