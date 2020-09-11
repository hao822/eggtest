const { Service } = require("egg");
const uuid = require('node-uuid');

class UserService extends Service {

    //新增用户
    async addUser(singleUser){
        //自动生成一个id
        const userId = uuid.v1();
        //将id添加到用户信息中
        singleUser.user_id = userId;
        //访问数据库
        await this.app.mysql.insert('demo_user_t',singleUser);
        return {
            code: 200,
            message: 'success',
            result: userId
        };
    }

    //查询用户
    async index(parms) {
        // const sql = "select * from demo_suer_t where username = zhangsan "
        const results = await this.app.mysql.select('demo_user_t',{
            where: parms!=null?parms:null
        })
        return {
            code: 200,
            message: 'success',
            results,
        };
    }

    //修改用户
    async updateUser(singleUser){
        const { app } = this;
        const options = {
            where: {
                user_id : singleUser.user_id
            }
        };
        const res = await app.mysql.update('demo_user_t',singleUser,options)

        return {
            code: res.affectedRows === 1 ? 200 : 400,
            message: res.affectedRows === 1 ? 'success' : 'failure',
        }
    }

    //删除用户
    async delUser(userId){
        const res = await this.app.mysql.delete('demo_user_t',{
            user_id:userId
        })
        return {
            code: res.affectedRows === 1 ? 200 : 400,
            message: res.affectedRows === 1 ? 'success' : 'failure',
        }
    }
}

module.exports = UserService;