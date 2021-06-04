var clicmdhash = {
    GET: 'get',
    POST: 'create',
    PUT: 'set',
    DELETE: 'delete'
};

function cliUsageRenderer(method, path) {
    return `<tr><td>&nbsp;</td></tr><tr><td>CLI:</td><td>pmgsh ${clicmdhash[method]} ${path}</td></tr></table>`;
}
