
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
        meta: {
            title: '基础'
        },
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
        }]
    },
    {
        path: '/form',
        name: 'form',
        meta: {
            title: '表单组件'
        },
        children: [
            {
                path: 'input',
                name: 'input',
                meta: {
                    title: 'Input',
                    subtitle: '输入框'
                }
            }
        ]
    }
];