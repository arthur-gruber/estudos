exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelLocal = 'Este e o valor de uma variavel local'
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};

exports.checkCsrfError = (err ,req, res, next) => {
    if(err){
        return res.render('erro');
    }
    next();
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}