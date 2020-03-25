const { tweet, getTweet, comment,  deleteTweet } = require(`${global.$_ctrla}/tweetctrl`)

module.exports = router => {
    router.post('/tweet', tweet)
    router.get('/tweet/:hash', getTweet)
    router.post('/tweet/:hash', comment)
    router.delete('/tweet/:hash', deleteTweet)
    // TODO modify 
    //  TODO delete
}
// const promisify = require('util').promisify;
// function slowCallbackFunction (done) {
//   setTimeout(function () {
//     done()
//   }, 300)
// }
// const slowPromise = promisify(slowCallbackFunction);

// slowPromise()
//   .then(() => {
//     console.log('Slow function resolved')
//   })
//   .catch((error) => {
//     console.error('There has been an error:', error)
//   })