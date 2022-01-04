var push = require('web-push')

let vapidKeys = {
    publicKey: 'BDgzuAroZVKhcZoUgS8IbaVOBVx3mrGvPO3cuO4E705tVSULy4UHpI3USKmjSuCSu9O8acOqH1aXZq6zmsaoTLo',
    privateKey: 'w93cK5I35L6Y33NkxVDQDt29vHUSu5M3xMjD4M4bz1Q'
  }

  push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)
  let sub={};
  push.sendNotification(sub ,'text message')