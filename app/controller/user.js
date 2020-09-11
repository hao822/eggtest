const { Controller } = require("egg");

let templateJson = {
        user_id:'123',
        username: '123',
        password: '123',
        nickname: '123'
}
let jsonKey = Object.keys(templateJson);

class UserContriller extends Controller {

    //判断两个数组是否包含
    includes(arr1,arr2){
        return arr2.every(val=>arr1.includes(val))
    }

    //新增用户
    async addUser(){
        const { ctx } = this;
        const singleUser = ctx.request.body;
        ctx.logger.info(singleUser);
        const keys = Object.keys(singleUser)
        const zhi = this.includes(jsonKey,keys)
        if(zhi){
            const res = await ctx.service.user.addUser(singleUser);
            ctx.logger.info(res);
            ctx.body = res;
        }else{
            ctx.logger.info('key传入错误')
            ctx.body = 'key传入错误'
        }
    }

    //查询用户
    async index(){
        const { ctx } = this;
        ctx.logger.info(ctx.query)
        const keys = Object.keys(ctx.query)
        const zhi = this.includes(jsonKey,keys)
        if(zhi){
            const res = await ctx.service.user.index(ctx.query);
            ctx.logger.info(res);
            ctx.body = res;
        }else{
            ctx.logger.info('key传入错误')
            ctx.body = 'key传入错误'
        }
    }

    //修改用户
    async updateUser(){
        const { ctx } = this;
        const singleUser = ctx.request.body;
        ctx.logger.info(singleUser)
        const res = await ctx.service.user.updateUser(singleUser);
        ctx.logger.info(res)
        ctx.body = res;
    }

    //删除用户
    async delUser(){
        const { ctx } = this;
        const userId = ctx.params.user_id;
        ctx.logger.info(userId)
        const res = await ctx.service.user.delUser(userId);
        ctx.logger.info(res)
        ctx.body = res;
    }
}

module.exports = UserContriller;