const rp = require('request-promise');
// register

exports.getUser = async(req, res) => {
  const {UserID} = req.query;
  const {jwtToken} = req
  if(UserID){
    try {
      const urlRequest = `${process.env.API_URL_ENDPOINT}/User/Get`
      const result = await rp({
        uri: urlRequest,
        method: 'GET',
        qs: {
          UserID,
        },
        headers: {
          'Authorization': `Bearer ${jwtToken}`
        },
        json: true
      })
      return res.json(result);
    } catch (error) {
      
    }
  }else{
    return res.status(400).json({
      message: 'UserID is required!'
    })
  }
}