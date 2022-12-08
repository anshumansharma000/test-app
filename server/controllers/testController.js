console.log('hi');
console.log('I am called?');

function testFunc(req, res, next){
    console.log('inside test function');
    console.log('called');
    const message = process.env.SECRET;
    res.status(200).json({message: message});
}

module.exports = testFunc;