// hostname + port
console.log('location.host:' + location.host);
console.log('location.hostname:' + location.hostname);

let HOST_LIST = ['localhost', 'umlcn.com']
if (HOST_LIST.includes(location.hostname)) {
    console.log('yes');
} else {
    console.log('host not includes [' + HOST_LIST + ']')
    console.log('rewrite to:  https://umlcn.com');
    // todo: 未来可以做校验，非法域名下给他做跳转到另外的页面上
    // window.location.href = 'https://umlcn.com'
}
