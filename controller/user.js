const sleep = async (ms) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true)
        }, ms)
    })
}
module.exports = {
    setting(ctx) {
        ctx.body = {
            "success": true,
            "data": {
                "id": 1,
                "video": "[{\"url\":\"https://chenxiaoda.oss-cn-shenzhen.aliyuncs.com/KB/union/union.mp4\",\"name\":\"\"}]",
                "images": "[ {\"url\":\"../../test/img/index.png\",\"name\":\"\"}, {\"url\":\"../../test/img/index.png\",\"name\":\"\"}, {\"url\":\"../../test/img/index.png\",\"name\":\"\"}]"
            },
            "msg": null
        }
    },
    login (ctx) {
        ctx.body = {
            'kkk':'oo'
        }
    },
    async profile (ctx) {
        var a = await sleep(1000)
        console.log(a);
        ctx.body = {
            username: '相学长ssss',
            sex: 'man',
            age: '999'
        }
    },
    movie(ctx) {
        // var a = await sleep(1000)
        // console.log(a);
        ctx.body = [
            {title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
        ];
    }
}