const getFilmWithoutSubs = require('./find-folders-empty');
const findSubs = require("./download-subs");

module.exports = {
  ...getFilmWithoutSubs,
  ...findSubs
}