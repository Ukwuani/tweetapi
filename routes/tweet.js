const { tweet, getTweet, getTweetWithHash, comment,  deleteTweet } = require(`${global.$_ctrla}/tweetctrl`)

module.exports = router => {
    router.post('/tweet', tweet)
    router.post('/tweet/:hash', comment)
    router.get('/tweet/hash/:hash', getTweetWithHash)
    router.get('/tweet/hash/:hash/:skip', getTweetWithHash)
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