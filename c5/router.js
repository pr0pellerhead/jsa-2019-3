var routes = {
    get: [],
    post: [],
    put: [],
    patch: [],
    delete: [],
};

var get = (route, fn) => {
    routes.get.push({
        route: route,
        func: fn,
        regex: prepareRegex(route)
    });
    console.log(routes.get);
}

var post = (route, fn) => {
    routes.get.push({
        route: route,
        func: func
    });
}

var put = (route, fn) => {
    routes.get.push({
        route: route,
        func: func
    });
}

var patch = (route, fn) => {
    routes.get.push({
        route: route,
        func: func
    });
}

var del = (route, fn) => {
    routes.get.push({
        route: route,
        func: func
    });
}

var prepareRegex = (str) => {
    str = str.replace(/\//g, '^');
    return str;
}

get('/student/:id', () => {
    console.log('test');
})