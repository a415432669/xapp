var data = {
    //首页
    index:{
        //是否有通知信息
        isInfo : true,
        //轮播图
        imgList:[
            "../../static/img/img.png",
            "../../static/img/img.png",
            "../../static/img/img.png",
            "../../static/img/img.png",
            "../../static/img/img.png"
        ],
        touTiao:[
            {
                url:'http://www.baidu.com',
                title:'头条：珠海今日港珠澳大桥通车，农民工兄弟有福了'
            },
            {
                url:'http://www.baidu.com',
                title:'农民工工资又要涨了'
            },
            {
                url:'http://www.baidu.com',
                title:'习近平总书记长江考察纪实'
            }
        ],
        // 我的工资
        gongzi:[
            [
                {time:'2018-4',pay:'7231'},
                {time:'2018-3',pay:'7231'},
                {time:'2018-2',pay:'7231'}
            ],
            [
                {time:'2018-1',pay:'7231'},
                {time:'2017-12',pay:'7231'},
                {time:'2017-11',pay:'7231'}
            ],
            [
                {time:'2017-10',pay:'7231'},
                {time:'2017-9',pay:'7231'},
                {time:'2017-8',pay:'7231'}
            ]
        ],
        //上一月与下一月的考勤事件，将调用static/js/calendar2.js文件，36行绑定事件函数，通过ajax从后台获取数据后改变signList的值
        kaoqing:{
            detail:{month:4,day:4},
            signList:[{"signDay":"09"},{"signDay":"11"},{"signDay":"12"},{"signDay":"13"}]},

    },
    //通知公告列表
    info:{
        infoList:[
            {   
                infoId:'123',
                time:'2018-04-25 16:36:18',
                isRead:false,
                isWeather:true,
                title:"天气预警",
                content:'明天有大到暴雨，请注意安全',
                project:'A施工总包'
            },
            {
                infoId:'456',
                time:'2018-04-25 16:36:18',
                isRead:false,
                isWeather:false,
                title:"五一放假通知",
                content:'放假三天',
                project:'A施工总包'
            },
            {
                infoId:'789',
                time:'2018-04-25 16:36:18',
                isRead:true,
                isWeather:true,
                title:"天气预警",
                content:'明天有大到暴雨，请注意安全',
                project:'A施工总包'
            }
        ]
    },
    //通知公告内容页,根据公告ID，用ajax请求数据变更内容页，请看infoPage.vue,mounted函数
    infoPage:{

    },
    salary:[
        {
            payId:123,
            pay:'8625.00',
            time:'2018-04-25 16:36:18'
        },{
            payId:456,
            pay:'7625.00',
            time:'2018-04-25 16:36:18'
        },{
            payId:789,
            pay:'9625.00',
            time:'2018-04-25 16:36:18'
        },{
            payId:89,
            pay:'9625.00',
            time:'2018-04-25 16:36:18'
        }
    ],
    //工资详情页，根据工资详情ID，用ajax请求数据，请看salaryPage.vue，mounted函数
    salaryPage:[],
    //工作履历
    gzll:[
        {
           gzId:12,
           projectName:'腾辉科技大厦一期',
           company:'广东建粤工程有限公司',
           workname:'普工',
           time:'2017-10-11至2018-4-20'
        },
        {
            gzId:123,
            projectName:'铭泰城市广场',
            company:'广东建粤工程有限公司',
            workname:'工程师',
            time:'2017-10-11至2018-4-20'
         },
         {
            gzId:124,
            projectName:'格力广场一期',
            company:'广东建粤工程有限公司',
            workname:'总监',
            time:'2017-10-11至2018-4-20'
         },{
            gzId:125,
            projectName:'华发商都购物广场二期',
            company:'广东建粤工程有限公司',
            workname:'总监',
            time:'2017-10-11至2018-4-20'
         }
    ],
}

export default data;