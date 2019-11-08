//存放list页面的api
const { request } = require('./main.js')

module.exports = {
  getArticles: data => {
    return request('/getallarticles', 'post', data)
  },
  getArticleDetail: data => {
    return request('/getarticleDetail', 'post', data)
  }
}
