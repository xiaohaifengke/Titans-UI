export interface AppMenu {
    path: string,
    name?: string,
    children?: Array<AppMenu>,
    meta?: object
}

export const MENUS: Array<AppMenu> = [
    {
        path: '/demo',
        name: 'demo',
        meta: {
            title: 'uDemo'
        },
        children: [{
            path: 'demo-use-style',
            name: 'demo-use-style',
            meta: {
                title: 'DemoUseStyle',
                subtitle: 'useStyle Demo'
            }
        }, {
            path: 'demo-use-slots',
            name: 'demo-use-slots',
            meta: {
                title: 'DemoUseSlots',
                subtitle: 'useSlots Demo'
            }
        }]
    },
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
                path: 'button',
                name: 'button',
                meta: {
                    title: 'Button',
                    subtitle: '按钮'
                }
            },
            {
                path: 'switch',
                name: 'switch',
                meta: {
                    title: 'switch',
                    subtitle: '切换开关'
                }
            },
            {
                path: 'input',
                name: 'input',
                meta: {
                    title: 'Input',
                    subtitle: '输入框'
                }
            }
        ]
    },
    {
        path: '/others',
        name: 'others',
        meta: {
            title: '其他组件'
        },
        children: [
            {
                path: 'dialog',
                name: 'dialog',
                meta: {
                    title: 'Dialog',
                    subtitle: '对话框'
                }
            }
        ]
    }
];
