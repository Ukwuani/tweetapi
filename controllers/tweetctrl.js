
const tweetRepo = require(`${global.$_repo}/tweetrepo`)
const _tweetRepo = new tweetRepo()

module.exports =  {

    async tweet ( req, res) {
        await _tweetRepo.tweet(req.body, res)
    },

    async getTweet( req, res) {
        await _tweetRepo.getTweetWithHash(req.params.hash, res)
    },

    async getTweetWithHash( req, res) {
        let skip = 20 * (req.params.skip)
        const query={
            hash: req.params.hash,
            skip
        }
        // res.json(query)
        await _tweetRepo.getTweetWithHash(query, res)
    },

    async comment (req, res) {
        const tweetData= {
            hash: req.params.hash,
            data: req.body
        }
        await _tweetRepo.comment(tweetData)
    },

    async deleteTweet(req, res) {
        // TODO ALTER
       res.json({
           status: 1000,
           success: false
       }) 
    }
}