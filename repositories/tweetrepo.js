/**
 * @date 14-12-201
 * @author UkB
 * @description this class describes the User Repository
 */
//import from user case
const {tweetSchema} = require(`${global.$_model}`) 
var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase(process.env['GRAPHENEDB_URL']);
module.exports = class {

    //CREATE A TWEET_________________________________________
    async tweet(tweet, res) {
        try {
            let tweetData =  tweetSchema(tweet)
            console.log(tweetData)
            await db.cypher({
                query: 'CREATE (t:Tweet {tweetData}) RETURN t',
                params: {
                    tweetData
                }
            }, async function (err, results) {
                if (err) {
                    console.error('Error saving new node to database:', err)
                    return res.json({
                        status:1000,
                        success: false
                    })
                }
                return res.json({
                    data: results,
                    status:2000,
                    success:true
                })
            })
        } catch(err) {
            return {
                status: 1000,
                success: false
            }
        }            
    }


    //GET A TWEET_________________________________________
    async getTweetWithHash(queryData, res) {
        try {
            await db.cypher({
                query: 'MATCH (n: Tweet{_hash:{hash}}) -[:TWEETAT]->(t: Tweet)  Return t SKIP {skip} LIMIT 20',
                params:  {
                    hash: queryData.hash,
                    skip: queryData.skip
                }
            },  async function (err, results) {
                if (err) {
                    return res.json({
                        status:1000,
                        success: false
                    })
                }
                return res.json({
                    data: results,
                    status:2000,
                    success:true
                })
            })
        } catch (err) {
            return res.json({
                status: 1000,
                success: false
            })
        }
    }


    // COMMENT ON A TWEET______________________________
    async comment(tweetData, res) {
        try {
            await db.cypher({
                query: 'MATCH (n: Tweet {_hash: {hash}})  Merge (t)-[:TWEETAT]->  (t: Tweet {data}}  ) RETURN t',
                params:  {
                    hash:tweetData.hash,
                    data: tweetData.data
                }
            },  async function (err, results) {
                if (err) {
                    return res.json({
                        status:err,
                        success: false
                    })
                }
                return res.json({
                    data: results,
                    status:2000,
                    success:true
                })
            })
        } catch (err) {
            return {
                status: err,
                success: false
            }
        }
    }
}