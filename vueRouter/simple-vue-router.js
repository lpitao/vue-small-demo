class HistoryRoute {
    constructor(){
        this.current = null
    }
}

class VueRouter {
    constructor(opts){
        this.mode = opts.mode || 'hash';
        this.routes = opts.routes || [];
        //创建路由映射表
        this.routesMap = this.creatMap(this.routes);
        //记录当前展示的路由
        this.history = new HistoryRoute();
        this.init();
    }
    //初始化动态修改 history.current
    init(){
        if(this.mode === 'hash'){
            location.hash ? '' : location.hash = '/';
            window.addEventListener('load', () => {
                this.history.current = location.hash.slice(1);
            });
            window.addEventListener('hashchange', () => {
                this.history.current = location.hash.slice(1)
            })
        }else{
            location.pathname ? '' : location.pathname = '/';
            window.addEventListener('load', () => {
                this.history.current = location.pathname;
              });
              window.addEventListener('popstate', () => {
                this.history.current = location.pathname;
              })
        }
    }

    // 创建路由映射表
    // {
    //   '/': HomeComponent,
    //   '/about': AboutCompontent
    // }
    creatMap(routes){
        return routes.reduce((memo, current) => {
            memo[current.path] = current.component;
            return memo;
        },{})
    }
}
//Vue.use(Router)时触发
VueRouter.install = function(Vue){
    //定义￥router ￥route属性
    Object.defineProperty(Vue.prototype, '$router', {
        get(){
            return this.$root._router;
        }
    });
    Object.defineProperty(Vue.prototype, '$route', {
        get(){
            return $this.$root._route
        }
    });
    //全局混入beforeCreate钩子函数
    Vue.mixin({
        beforeCreate() {
            //通过this.$options.router判断为根实例
            if (this.$options && this.$options.router){
                this._router = this.$options.router;
                //给this对象定义一个响应式属性
                Vue.util.defineReactive(this, '_route', this._router.history);
            }
        },
    })
    //注册全局组件 router-link
    Vue.component('router-link', {
        props: {
            to: String,
            tag: String
        },
        methods: {
            handleClick(){
                const mode = this._self.$root._router.mode;
                location.href = mode === 'hash' ? `#${this.to}` : this.to;
            }
        },
        render: function (h) {
            const mode = this._self.$root._router.mode;
            const tag = this.tag || 'a';
            return (
                <tag
                on-click={ tag !== 'a' && this.handleClick }
                href={ mode === 'hash' ? `#${this.to}` : this.to }
                >
                { this.$slots.default }
                </tag>
            );
        }
    });
    // 注册全局组件 router-view
    // 根据 history.current 从 路由映射表中获取到对象组件并渲染
    Vue.component('router-view', {
        render: function (h) {
        const current = this._self.$root._route.current;
        const routeMap = this._self.$root._router.routesMap;
        return h(routeMap[current]);
        }
    });
}