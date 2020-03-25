
let tweethash  =  ()  =>  {
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
};

//Mongoose Model Setup
/**
 * @param {object}
 */
function tweetSchema ({
    data, //tweetType: enum{ comment,  tweet}
    text, // text content
    msgType, // type of msg: enum{txt, img}
    sender, // sender
    imgUrl,// image URL
}) {
    return {
        ...arguments[0],
        _hash: tweethash(), //unique id
        createdAt:  new Date(), // track date
        updatedAt: Date.now() // onchange date
    }
}

module.exports =  tweetSchema 
