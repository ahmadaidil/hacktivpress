const crypto = require('crypto');

function randStr(m) {
    var m = m || 9;
    s = '', r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < m; i++) {
        s += r.charAt(Math.floor(Math.random() * r.length));
    }
    return s;
}

function hash(password, salt) {
    let passwordHash = crypto.createHmac('sha256', salt)
        .update(password)
        .digest('hex');

    return passwordHash;
}


module.exports = {
    randStr,
    hash
};
