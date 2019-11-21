const Koa = require('Koa')
const serve = require('koa-static')
const views = require('koa-views')
const { resolve } = require('path')

const app = new Koa()
const port = 1122

app.use(serve(resolve(__dirname, '../')));

app.use(views(resolve(__dirname, '../'), {
    autoRender: false,
    extension: 'html'
}));

app.use(async function (ctx) {
    return await ctx.render('index.html')
})
// app.use(async(ctx,next)=>{
//     console.log(ctx)
//     ctx.body = 'hi'

// })
app.listen(port)