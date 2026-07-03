exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelLocal = 'Este e o valor de uma variavel local'
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};

exports.checkCsrfError = (err ,req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code){
        return res.render('includes/erro');
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}