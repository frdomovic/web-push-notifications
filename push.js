var push = require('web-push')

let vapidKeys = {
    publicKey: 'BDgzuAroZVKhcZoUgS8IbaVOBVx3mrGvPO3cuO4E705tVSULy4UHpI3USKmjSuCSu9O8acOqH1aXZq6zmsaoTLo',
    privateKey: 'w93cK5I35L6Y33NkxVDQDt29vHUSu5M3xMjD4M4bz1Q'
  }

  push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)
  let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/eFFXjW1EfIw:APA91bGHS6aVgw84bnMyWIfx8T-aVzDcwoXcGWNIL4SMeJscQ8d83nCRDCBQh0RNghvs_Xzj4SMSDDLEk-bbvgySxw8uyv5j-SfznD5mLr_yVaxfccvXHQTKD5Os8G98e7twBEtYAryO","expirationTime":null,"keys":{"p256dh":"BJ33mzhqI4omo3q2w6iHIzJtU6fkJexXCdaPQejObSNm-nzS6MyI9SowYhI-4-KwpINw_bCUoc7h70Sz1zdV_EU","auth":"xjTZV6xQiR4sKCmAH3k7Mg"}};
  push.sendNotification(sub ,'text message')