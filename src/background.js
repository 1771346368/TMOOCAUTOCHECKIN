var res;
var On;
var getres = function () {
  // 获取user
  chrome.storage.local.get('user', (result) => {
    res = result;
  })
}
getres()
var getcheck = function () {
  chrome.storage.local.get('on', (result) => {
    console.log(result.on, '@@@@@@@@@@@@@@@@@@@@')
    if (result.on == undefined) {
      On = true
      chrome.storage.local.set({ on: true }, () => { })
    } else if (result.on == true) {
      On = true;
    } else if (result.on == false) {
      On = false;
    }
  })
}
getcheck()
var getOn = function () {
  return On;
}
var getStorage = function () {
  // 返回user
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
