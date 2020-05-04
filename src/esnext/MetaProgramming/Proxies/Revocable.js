console.log(
    '%c Revocable Proxy API Section:-',
    `
        font-size: 30px; 
        color: teal; 
        text-decoration: underline;
    `
);

/**
 * Revocable proxy is a proxy which can be revoked(
 *  The created proxy fucntionalities will be reverted back after the proxy is revoked.
 * )
 */

const obj = {
    name: 'Rajni',
    job: 'IT'
};

const rp = Proxy.revocable(obj, {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        }

        return prop.split('_').map(chunk => chunk in target ? target[chunk] : '' ).join(', ');
    }
});

const proxy = rp.proxy;

console.log(proxy.name_job);    // Rajni, IT

rp.revoke();

console.log(proxy.name_job);    // Error bcz the proxy has been revoked now.