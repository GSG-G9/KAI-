const search = (movieName, data) => data.results.filter(el => el.name == movieName)

module.exports = {search}