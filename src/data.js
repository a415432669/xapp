var data = {
    //首页
    index:{
        //是否有通知信息
        isInfo : true,
        //轮播图
        imgList:[
            "https://a415432669.github.io/xaShow/static/img/img.png",
            "https://a415432669.github.io/xaShow/static/img/img.png",
            "https://a415432669.github.io/xaShow/static/img/img.png",
            "https://a415432669.github.io/xaShow/static/img/img.png",
            "https://a415432669.github.io/xaShow/static/img/img.png"
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
    //个人信息页面
    userInfo:{
        userImg:'http://img3.imgtn.bdimg.com/it/u=552901093,87727910&fm=27&gp=0.jpg',
        username:'王大年',
        userSex:'男',
        infoList:[
            {
                key:'手机号：',
                value:'13288888888'
            },
            {
                key:'身份证号：',
                value:'441999999000099667'
            },
            {
                key:'出身年月：',
                value:'1966-08-08'
            },{
                key:'常住地址：',
                value:'广东省珠海市高新区创业路11111118888999988'
            },{
                key:'有效期：',
                value:'2088-09-27'
            },{
                key:'培训记录：',
                value:'---'
            }

        ],
    },
    //用工评价的收到评价页面
    sdpj:[
        {
            title:'干活不认真',
            imgSrc:'https://a415432669.github.io/xaShow/static/img/kulian.png',
            company:'广东建粤工程有限公司',
            time:'2017-10-11'
        },{
            title:'私生活不检点',
            imgSrc:'https://a415432669.github.io/xaShow/static/img/kulian.png',
            company:'广东建粤工程有限公司',
            time:'2017-10-11'
        },{
            title:'态度棒棒的',
            imgSrc:'https://a415432669.github.io/xaShow/static/img/xiaolian.png',
            company:'广东建粤工程有限公司',
            time:'2017-10-11'
        },
    ],
    //用工评价的我发起评价页面
    fqpj:[
        {
            title:'饭不好吃',
            company:'广东建粤工程有限公司',
            audioSrc:'http://ting666.yymp3.com:86/new27/xuezhiqian8/8.mp3',
            imgList:[
                'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2256775597,3112941789&fm=27&gp=0.jpg',
                'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1859776440,2622712737&fm=200&gp=0.jpg',
                'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1073338900,1076556295&fm=200&gp=0.jpg'
            ],
            time:'2018-4-20 17:10'
        },{
            title:'今天的饭菜很好吃',
            company:'广东建粤工程有限公司',
            audioSrc:'http://ting666.yymp3.com:86/new27/xuezhiqian8/8.mp3',
            imgList:[
                'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2256775597,3112941789&fm=27&gp=0.jpg',
                'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1859776440,2622712737&fm=200&gp=0.jpg',
                'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1073338900,1076556295&fm=200&gp=0.jpg',
                'http://img0.imgtn.bdimg.com/it/u=3214610712,2436908944&fm=27&gp=0.jpg'
            ],
            time:'2018-4-20 17:10'
        },
    ],
    //登录界面的用户协议内容
    yhxy:`<p>1、请遵循腾晖科技使用协议</p><p>2、腾晖科技对本产品有最终解释权</p>`,
    //我要评价,用ajax获取施工总包信息
    wypj:[],
}

export default data;