```js
const user = {
  email: 'cc@gmail.com',
  isActive: true
};

user.isActive = false;
console.log(user); // *
const user = {
    email: 'cc@gmail.com',
    isActive: false
  };
user = {};
console.log(user); // **
{}
```