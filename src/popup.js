setTimeout(() => {
  var bg = chrome.extension.getBackgroundPage()
  bg.getres()
  bg.getcheck()
  // 上面两行是重新获取用户名、密码与开关
  var result = bg.getStorage();

  document.querySelector('#rand-answer').checked = bg.getOn()
  // 设置插件是否开启的选项的选中与否
  var info = document.querySelector('#info')
  // alert(result)
  if (result == undefined) {
    info.innerHTML = '第一次使用请先填写用户名与密码'
    info.classList.remove('success')
    info.classList.add('warning')
  } else {

    info.innerHTML = '用户名与密码已填写';
    info.classList.remove('warning')
    info.classList.add('success')
  }
  document.querySelector('#rand-answer').onclick = function () {
    var On = document.querySelector('#rand-answer').checked
    chrome.storage.local.set({ on: On }, () => { })
  }
  document.querySelector('#intoT').onclick = function () {
    // 每次点击进入TMOOC官网时设置为On
    (function () {
      chrome.storage.local.set({ on: true }, () => { })
    })()
    if (result != undefined) {
      // setTimeout(() => {
      //   var sendMessageToContentScript = function (message, callback) {
      //     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      //       chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
      //         if (callback) callback(response);
      //       });
      //     });
      //   }
      //   sendMessageToContentScript({ cmd: 'test', value: '你好，我是popup！' }, function (response) {
      //     console.log('来自content的回复：' + response);
      //   });
      // }, 500);

      // alert(result.userName)
      // chrome.runtime.sendMessage(result, (response) => {
      //   // console.log(response);
      // });
    } else {
      alert('第一次登陆请填写用户名与密码')
    }
  }
  document.querySelector('#setUser').onclick = function () {
    let Tuser = document.querySelector('#Tuser').value;
    let Tpwd = document.querySelector('#Tpwd').value;
    user = {
      userName: Tuser,
      passWord: Tpwd
    }

    /*8进制加密*/
    function Encrypt(user) {
      for (var keys in user) {
        var monyer = [];
        var i;
        for (i = 0; i < user[keys].length; i++) {
          monyer += "\\" + user[keys].charCodeAt(i).toString(8);
        }
        user[keys] = monyer;
      }
      return user;
    }
    user = Encrypt(user)



    /*8进制解密*/
    // function Decrypt(user) {
    //   for (var keys in user) {
    //     var monyer = [];
    //     var i;
    //     var s = user[keys].split("\\");
    //     for (i = 1; i < s.length; i++)
    //       monyer += String.fromCharCode(parseInt(s[i], 8));
    //     user[keys] = monyer;
    //   }
    //   return user;
    // }
    // user = Decrypt(user);

    chrome.storage.local.set({ user: user }, () => {
      alert('用户名&&密码设置成功')
      bg.getres()
    })
  }
}, 100);



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
