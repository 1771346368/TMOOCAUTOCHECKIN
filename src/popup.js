setTimeout(() => {
  var bg = chrome.extension.getBackgroundPage()
  bg.getres()
  var result = bg.getStorage()
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
  document.querySelector('#intoT').onclick = function () {
    if (result != undefined) {
      setTimeout(() => {
        var sendMessageToContentScript = function (message, callback) {
          chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
              if (callback) callback(response);
            });
          });
        }
        sendMessageToContentScript({ cmd: 'test', value: '你好，我是popup！' }, function (response) {
          console.log('来自content的回复：' + response);
        });
      }, 500);

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
    chrome.storage.local.set({ user: user }, () => {
      alert('set success')
      bg.getres()
    })
  }
}, 500);



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
