
export interface AppMenu {
    path: string,
    name?: string,
    children?: Array<AppMenu>,
    meta?: object
}

export const MENUS: Array<AppMenu> = [
    {
        path: '/normal',
        name: 'normal',
        children: [{
            path: 'color',
            name: 'color',
            meta: {
                title: 'Color',
                subtitle: '颜色'
            }
        }, {
            path: 'icon',
            name: 'icon',
            meta: {
                title: 'Icon',
                subtitle: '图标'
            }
        }, {
            path: 'button',
            name: 'button',
            meta: {
                title: 'Button',
                subtitle: '按钮'
            }
        }, {
            path: 'layout',
            name: 'layout',
            meta: {
                title: 'Layout',
                subtitle: '布局'
            }
        }],
        meta: {
            title: '基础'
        }
    }
]