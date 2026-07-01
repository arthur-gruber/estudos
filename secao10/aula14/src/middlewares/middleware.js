exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelLocal = 'Este e o valor de uma variavel local'
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};
