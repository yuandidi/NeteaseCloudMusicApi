#!/usr/bin/env node
async function start() {
  process.on('uncaughtException', function (err) {
    console.log(err)
  })
  // 如果需要手动修改anonymous_token，需要注释generateConfig调用
  require('./server').serveNcmApi({
    checkVersion: true,
  })
}
start()
