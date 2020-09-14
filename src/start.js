const TMOOOC = 'http://www.tmooc.cn/';
const LOGIN = 'http://uc.tmooc.cn/login/jumpTologin'
const USERCOURSE = 'http://uc.tmooc.cn/userCenter/toUserSingUpCoursePage'
const USERCENTER = 'http://uc.tmooc.cn/userCenter/toUserCenterPage'
const MYTTS = 'http://tts.tmooc.cn/studentCenter/toMyttsPage'
var username, password;
var checkIn = function () {
  chrome.storage.local.get('user', (result) => {
    chrome.storage.local.get('on', (res) => {
      // console.log(res.on, '***************')
      var On = res.on
      if (On == undefined) {
        // 初始化为false
        On = false
        chrome.storage.local.set({ on: false }, () => { })
      } else if (On == false) {
        return;
      }
      // 获取user数据
      var user = result.user;
      // 解密数据
      user = Decrypt(user);
      username = user.userName;
      password = user.passWord;
      if (On) {
        switch (window.location.href) {
          case TMOOOC:
            getInto();
            break;
          case LOGIN:
            getInput();
            break;
          case USERCOURSE:
          case USERCENTER:
            getCoures();
            break;
          case MYTTS:
            getCheckin();
            break;
        }
      }
    })
  })
}

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
var getInto = function () {
  let username = document.querySelector('#tobbar_username')
  if (username == null) {
    setTimeout(getInto, 100);
  } else {
    username.click();
  }
}
var getInput = function () {
  let submitLogin = document.querySelector('#js_submit_login')
  if (submitLogin == null) {
    setTimeout(getInput, 100);
  } else {
    document.querySelector('#js_account_pm').value = username
    document.querySelector('#js_password').value = password
    submitLogin.click();
  }
}
var getCoures = function () {
  let _0523x = document.querySelector('.btn-0523x')
  if (_0523x == null) {
    setTimeout(getCoures, 100);
  } else {
    _0523x.click();
  }
}
var getCheckin = function () {
  let bbb1 = document.querySelector('.bbb1')
  if (bbb1 == null) {
    setTimeout(getCheckin, 1000);
    // 点击速度过快，获取到的元素还没绑定事件，所以点击无效
  } else {
    bbb1 = document.querySelector('.bbb1')
    // console.log('5555555555555')
    // console.log(bbb1)
    bbb1.click();
    chrome.storage.local.set({ on: false }, () => { })
  }
}
window.onload = checkIn()
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
      document.querySelector('#js_account_pm').value = ''
      document.querySelector('#js_password').value = ''
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
// }