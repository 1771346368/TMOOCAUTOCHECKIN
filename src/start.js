(function () {
  'use strict';
  chrome.storage.local.get('user', (result) => {
    chrome.storage.local.get('on', (res) => {
      // console.log(res.on, '***************')
      var On = res.on
      if (On == undefined) {
        On = true
        chrome.storage.local.set({ on: true }, () => { })
      } else if (On == true) {
        On = true;
      } else if (On == false) {
        On = false;
        return;
      }
      var user = result.user;
      var Decrypt = function (user) {
        for (var keys in user) {
          var monyer = [];
          var i;
          var s = user[keys].split("\\");
          for (i = 1; i < s.length; i++) {
            monyer += String.fromCharCode(parseInt(s[i], 8));
          }
          user[keys] = monyer;
        }
        return user;
      }
      user = Decrypt(user);
      // console.log(user);
      // console.log(result)
      var username = user.userName;
      var password = user.passWord;
      if (On) {
        if (window.location.href === "http://www.tmooc.cn/") {
          var getInto = function () {
            if (document.querySelector('#tobbar_username') == null) {
              setTimeout(getInto, 100);
            } else {
              document.querySelector('#tobbar_username').click();
            }
          }
          getInto()
          // setTimeout(() => {
          //   document.querySelector('#tobbar_username').click();
          // }, 1000);
        } else if (window.location.href === "http://uc.tmooc.cn/login/jumpTologin") {
          var getInput = function () {
            if (document.querySelector('#js_submit_login') == null) {
              setTimeout(getInput, 100);
            } else {
              document.querySelector('#js_account_pm').value = username
              document.querySelector('#js_password').value = password
              document.querySelector('#js_submit_login').click();
            }
          }
          getInput()
          // setTimeout(() => {
          //   document.querySelector('#js_account_pm').value = username
          //   document.querySelector('#js_password').value = password
          //   document.querySelector('#js_submit_login').click();
          // }, 1000);
        } else if ((window.location.href === "http://uc.tmooc.cn/userCenter/toUserSingUpCoursePage" || window.location.href === 'http://uc.tmooc.cn/userCenter/toUserCenterPage')) {
          var getCou = function () {
            if (document.querySelector('.btn-0523x') == null) {
              setTimeout(getCou, 100);
            } else {
              document.querySelector('.btn-0523x').click();
            }
          }
          getCou()
          // setTimeout(() => {
          //   document.querySelector('.btn-0523x').click();
          // }, 1000);
        } else if (window.location.href === "http://tts.tmooc.cn/studentCenter/toMyttsPage") {
          var getCheckin = function () {
            if (document.querySelector('.bbb1') == null) {
              setTimeout(getCheckin, 100);
            } else {
              document.querySelector('.bbb1').click();
              chrome.storage.local.set({ on: false }, () => { })
            }
          }
          getCheckin()
          // setTimeout(() => {
          //   document.querySelector('.bbb1').click();
          //   chrome.storage.local.set({ on: false }, () => {

          //   })
          // }, 1000);
        }
      }
    })
  })
  // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  //   username = request.userName;
  //   password = request.passWord;
  //   re = request;
  // });
  // setTimeout(() => {
  //   console.log(re)
  //   console.log('------------------')
  // }, 500);
  // if (!username) {
  //   console.log(re)
  //   console.log('------------------')
  // }
  /*
  if (window.location.href === "http://www.tmooc.cn/") {
    setInterval(() => {
      document.querySelector('#tobbar_username').click();
    }, 500);
  } else if (window.location.href === "http://uc.tmooc.cn/login/jumpTologin") {
    // var getInput = function () {
    //   if (document.querySelector('#js_submit_login') == null) {
    //     setTimeout(getInput, 100);
    //   } else {
    //     document.querySelector('#js_account_pm').value = '1771346368@qq.com'
    //     document.querySelector('#js_password').value = 'dr123456'
    //     document.querySelector('#js_submit_login').click();
    //   }
    // }
    // getInput()
    setTimeout(() => {
      var inputClick = function () {
        document.querySelector('#js_account_pm').value = '1771346368@qq.com'
        document.querySelector('#js_password').value = 'dr123456'
        document.querySelector('#js_submit_login').click();
      }
    }, 1000);
  } else if (window.location.href === "http://uc.tmooc.cn/userCenter/toUserSingUpCoursePage" || window.location.href === 'http://uc.tmooc.cn/userCenter/toUserCenterPage') {
    // var getCou = function () {
    //   if (document.querySelector('.btn-0523x') == null) {
    //     setTimeout(getCou, 100);
    //   } else {
    //     document.querySelector('.btn-0523x').click();
    //   }
    // }
    setTimeout(() => {
      document.querySelector('.btn-0523x').click();
    }, 1000);
  } else if (window.location.href === "http://tts.tmooc.cn/studentCenter/toMyttsPage") {
    // var getCheckin = function () {
    //   if (document.querySelector('.bbb1') == null) {
    //     setTimeout(getCheckin, 100);
    //   } else {
    //     document.querySelector('.bbb1').click();
    //   }
    // }
    setTimeout(() => {
      document.querySelector('.bbb1').click();
    }, 1000);
  }
*/
})();