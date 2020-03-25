
const tweetRepo = require(`${global.$_repo}/tweetrepo`)
const _tweetRepo = new tweetRepo()

module.exports =  {

    async tweet ( req, res) {
        await _tweetRepo.tweet(req.body, res)
    },

    async getTweet( req, res) {
        req.query._hash = req.params.hash
        const response = await _tweetRepo.getTweet(req.query)
        res.json(response)
    },

    async comment (req, res) {
        req.body._hash = req.params.hash
        const response = await _tweetRepo.comment(req.body)
        res.json(response)
    },

    async deleteTweet(req, res) {
        // TODO ALTER
       res.json({
           status: 1000,
           success: false
       }) 
    }
}