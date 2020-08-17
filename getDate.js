const getDate = `Le ${new Date().toLocaleDateString()} à ${new Date().getUTCHours()}h${new Date().getUTCMinutes()}`;

module.exports = getDate;