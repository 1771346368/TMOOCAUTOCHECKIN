var res;
var getres = function () {
  chrome.storage.local.get('user', (result) => {
    res = result;
  })
}
getres()
var getStorage = function () {
  return res.user;
}
// document.querySelector('#setUser').onclick = function () {
//   let Tuser = document.querySelector('#Tuser').value;
//   let Tpwd = document.querySelector('#Tpwd').value;
//   user = {
//     userName: Tuser,
//     passWord: Tpwd
//   }
//   chrome.storage.sync.set(user, () => {
//     console.log('set success');
//   })
// }




// var setUser = function () {
//   let Tuser = document.querySelector('#Tuser').value;
//   let Tpwd = document.querySelector('#Tpwd').value;
//   user = {
//     userName: Tuser,
//     passWord: Tpwd
//   }
//   chrome.storage.local.set({ user: user }, () => {
//     console.log('set success');
//   })
// }
