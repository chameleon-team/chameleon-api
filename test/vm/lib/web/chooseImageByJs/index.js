export default class ChooseImageByJs {
  chooseImage(params = {
    quality: 0.8
  }, callback) {
    callback('data:image/jpg;base64,somebase64data')
  }
}
