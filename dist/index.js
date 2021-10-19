(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TitansUI = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  function installPlugins(Component, plugins) {
      return Object.assign(Object.assign({}, Component), { install(app) {
              app.component(Component.name, Component);
              plugins === null || plugins === void 0 ? void 0 : plugins.forEach(app.use);
          } });
  }

  var script$5 = vue.defineComponent({
      name: 'TiIcon',
      props: {
          icon: {
              type: String,
              required: true
          }
      }
  });

  const _hoisted_1$5 = ["xlink:href"];

  function render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("svg", {
      class: vue.normalizeClass(["ti-icon", `ti-icon-${_ctx.icon}`]),
      "aria-hidden": "true"
    }, [
      vue.createElementVNode("use", {
        "xlink:href": `#icon-${_ctx.icon}`
      }, null, 8 /* PROPS */, _hoisted_1$5)
    ], 2 /* CLASS */))
  }

  script$5.render = render$5;
  script$5.__file = "src/packages/icon/icon.vue";

  var Icon = installPlugins(script$5);

  var StyleShape;
  (function (StyleShape) {
      StyleShape["fillet"] = "fillet";
      StyleShape["round"] = "round";
      StyleShape["square"] = "square";
  })(StyleShape || (StyleShape = {}));
  var StyleSize;
  (function (StyleSize) {
      StyleSize["large"] = "large";
      StyleSize["normal"] = "normal";
      StyleSize["small"] = "small";
      StyleSize["mini"] = "mini";
  })(StyleSize || (StyleSize = {}));
  var StyleType;
  (function (StyleType) {
      StyleType["default"] = "default";
      StyleType["primary"] = "primary";
      StyleType["success"] = "success";
      StyleType["warning"] = "warning";
      StyleType["danger"] = "danger";
      StyleType["info"] = "info";
  })(StyleType || (StyleType = {}));
  var script$4 = vue.defineComponent({
      name: 'TiButton',
      components: { TiIcon: Icon },
      props: {
          label: { type: String },
          // 按钮类型: default/primary/success/warning/danger/info
          type: {
              type: String,
              default: ''
              // validator(value: unknown): boolean {
              //     const types = ['primary', 'success', 'warning', 'danger', 'info'];
              //     if (!types.includes(value as string)) {
              //         console.error(`type类型只能为：${types.join('/')}`);
              //         return false;
              //     }
              //     return true;
              // }
          },
          // 按钮模式: fill/plain/outline/text
          mode: {
              type: String,
              default: ''
          },
          // 按钮形状: fillet/round/square/circle
          shape: { type: String, default: '' },
          // 按钮大小: large/normal/small/mini
          size: { type: String, default: '' },
          icon: { type: String },
          iconPosition: {
              type: String,
              default: 'prefix' // suffix
              // validator(value: string): boolean {
              //     return ['prefix', 'suffix'].includes(value);
              // }
          },
          disabled: { type: Boolean },
          loading: { type: Boolean }
      },
      emits: {
          click: (e) => true
      },
      setup(props) {
          const classes = [
              'ti-button',
              {
                  [`ti-button-type-${props.type}`]: props.type,
                  [`ti-button-mode-${props.mode}`]: props.mode,
                  [`ti-button-shape-${props.shape}`]: props.shape,
                  [`ti-button-size-${props.size}`]: props.size,
                  'ti-button-disabled': props.disabled,
                  'ti-button-loading': props.loading
              }
          ];
          return {
              classes
          };
      }
  });

  const _hoisted_1$4 = ["disabled"];

  function render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_TiIcon = vue.resolveComponent("TiIcon");

    return (vue.openBlock(), vue.createElementBlock("button", {
      disabled: _ctx.disabled || _ctx.loading,
      class: vue.normalizeClass(_ctx.classes),
      onClick: _cache[0] || (_cache[0] = (e) => _ctx.$emit('click', e))
    }, [
      (_ctx.loading)
        ? (vue.openBlock(), vue.createBlock(_component_TiIcon, {
            key: 0,
            icon: "loading"
          }))
        : vue.createCommentVNode("v-if", true),
      (_ctx.icon && _ctx.iconPosition !== 'suffix')
        ? (vue.openBlock(), vue.createBlock(_component_TiIcon, {
            key: 1,
            icon: _ctx.icon
          }, null, 8 /* PROPS */, ["icon"]))
        : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("span", null, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createTextVNode(vue.toDisplayString(_ctx.label), 1 /* TEXT */)
        ])
      ]),
      (!_ctx.loading && _ctx.icon && _ctx.iconPosition === 'suffix')
        ? (vue.openBlock(), vue.createBlock(_component_TiIcon, {
            key: 2,
            icon: _ctx.icon
          }, null, 8 /* PROPS */, ["icon"]))
        : vue.createCommentVNode("v-if", true)
    ], 10 /* CLASS, PROPS */, _hoisted_1$4))
  }

  script$4.render = render$4;
  script$4.__file = "src/packages/button/button.vue";

  var Button = installPlugins(script$4);

  var script$3 = {
      name: 'TiButtonGroup'
  };

  const _hoisted_1$3 = { class: "ti-button-group" };

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [
      vue.renderSlot(_ctx.$slots, "default")
    ]))
  }

  script$3.render = render$3;
  script$3.__file = "src/packages/button-group/button-group.vue";

  var ButtonGroup = installPlugins(script$3);

  var script$2 = vue.defineComponent({
      name: 'TiSwitch',
      props: {
          modelValue: {
              type: [Boolean, String, Number],
              required: true
          },
          type: {
              type: String,
              default: 'primary'
          },
          width: {
              type: Number
          },
          height: {
              type: Number
          },
          onValue: {
              type: [Boolean, String, Number],
              default: true
          },
          offValue: {
              type: [Boolean, String, Number],
              default: false
          },
          onColor: {
              type: String
          },
          offColor: {
              type: String
          },
          handleOnColor: {
              type: String
          },
          handleOffColor: {
              type: String
          },
          disabled: {
              type: Boolean,
              default: false
          },
          onText: {
              type: String
          },
          offText: {
              type: String
          }
      },
      emits: ['update:modelValue', 'change'],
      setup(props, { emit }) {
          // 未设置 width
          vue.computed(() => {
              return props.width === undefined;
          });
          // 未设置 height
          vue.computed(() => {
              return props.height === undefined;
          });
          const isOn = vue.computed(() => {
              return props.modelValue === props.onValue;
          });
          const switchClasses = vue.computed(() => [
              'ti-switch',
              {
                  'is-on': isOn.value,
                  [`ti-switch-type-${props.type}`]: props.type,
                  'ti-switch-disabled': props.disabled
              }
          ]);
          const handleSize = vue.computed(() => {
              var _a;
              return ((_a = props.height) !== null && _a !== void 0 ? _a : 16) - 4;
          });
          const switchStyles = vue.computed(() => {
              var _a, _b, _c, _d;
              return ({
                  width: props.width + 'px',
                  height: props.height + 'px',
                  backgroundColor: isOn.value ? props.onColor : props.offColor,
                  borderColor: isOn.value ? props.onColor : props.offColor,
                  paddingRight: isOn.value
                      ? ((_a = props.height) !== null && _a !== void 0 ? _a : 20) + 'px'
                      : ((_b = props.height) !== null && _b !== void 0 ? _b : 20) / 2 + 'px',
                  paddingLeft: isOn.value
                      ? ((_c = props.height) !== null && _c !== void 0 ? _c : 20) / 2 + 'px'
                      : ((_d = props.height) !== null && _d !== void 0 ? _d : 20) + 'px'
              });
          });
          const handleStyles = vue.computed(() => ({
              width: handleSize.value + 'px',
              height: handleSize.value + 'px',
              left: isOn.value ? '100%' : '1px',
              marginLeft: isOn.value ? -(handleSize.value + 1) + 'px' : 0,
              backgroundColor: isOn.value ? props.handleOnColor : props.handleOffColor
          }));
          const handleChange = (e) => {
              if (props.disabled)
                  return;
              const modelValue = isOn.value ? props.offValue : props.onValue;
              emit('update:modelValue', modelValue);
          };
          const handleKeydown = (e) => {
              if (e.key === 'Enter' || e.key === 'Space') {
                  handleChange();
              }
              else if (e.key === 'ArrowLeft') {
                  emit('update:modelValue', props.offValue);
              }
              else if (e.key === 'ArrowRight') {
                  emit('update:modelValue', props.onValue);
              }
          };
          const switchRef = vue.ref(null);
          const focus = () => {
              switchRef.value && switchRef.value.focus();
          };
          const blur = () => {
              switchRef.value && switchRef.value.blur();
          };
          // change 事件
          vue.watch(() => props.modelValue, (val) => {
              emit('change', val);
          });
          return {
              isOn,
              switchClasses,
              handleSize,
              switchStyles,
              handleStyles,
              handleChange,
              handleKeydown,
              switchRef,
              focus,
              blur
          };
      }
  });

  const _hoisted_1$2 = { class: "ti-switch-text" };

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("button", {
      role: "switch",
      ref: "switchRef",
      class: vue.normalizeClass(_ctx.switchClasses),
      style: vue.normalizeStyle(_ctx.switchStyles),
      onKeydown: _cache[0] || (_cache[0] = vue.withModifiers((...args) => (_ctx.handleKeydown && _ctx.handleKeydown(...args)), ["prevent","self"])),
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.handleChange && _ctx.handleChange(...args)))
    }, [
      vue.createElementVNode("span", _hoisted_1$2, vue.toDisplayString(_ctx.isOn ? _ctx.onText : _ctx.offText), 1 /* TEXT */),
      vue.createElementVNode("span", {
        class: "ti-switch-handle",
        style: vue.normalizeStyle(_ctx.handleStyles)
      }, null, 4 /* STYLE */)
    ], 38 /* CLASS, STYLE, HYDRATE_EVENTS */))
  }

  script$2.render = render$2;
  script$2.__file = "src/packages/switch/switch.vue";

  var Switch = installPlugins(script$2);

  var script$1 = {
    name: 'TiDialog',
    components: { TiIcon: script$5, TiButton: script$4 },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '提示'
      },
      top: {
        type: [Number, String],
        default: '15vh'
      },
      width: {
        type: [Number, String],
        default: 520
      },
      overlay: {
        // 是否显示遮罩层
        type: Boolean,
        default: true
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: true
      },
      ok: {
        type: Function
      },
      cancel: {
        type: Function
      },
      okText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      customClass: {
        type: String
      },
      showClose: {
        type: Boolean,
        default: true
      },
      beforeClose: {
        type: Function
      },
      afterClose: {
        type: Function
      },
      destroyOnClose: {
        type: Boolean,
        default: false
      }
    },
    emits: ['update:visible'],
    setup(props, { emit, slots }) {
      const close = () => {
        const close = () => {
          emit('update:visible', false);
        };
        if (props.beforeClose) {
          props.beforeClose(close);
        } else {
          close();
        }
      };
      const clickOnOverlay = () => {
        if (props.closeOnClickOverlay) {
          close();
        }
      };
      const onOk = () => {
        if (props.ok?.() !== false) {
          close();
        }
      };
      const onCancel = () => {
        close();
      };

      const TiDialogClasses = ['ti-dialog', props.customClass];
      const TiDialogStyles = {
        marginTop: typeof props.top === 'string' ? props.top : `${props.top}px`,
        width: typeof props.width === 'string' ? props.width : `${props.width}px`
      };

      /**
       * props.visible, props.destroyOnClose, rendered: 是否已渲染
       * rendered为 false 时，vIf = visible, 当渲染后，rendered为 true;
       * rendered为 true 时:
       * props.destroyOnClose为 false 时 vIf = true, vShow为 props.visible;
       * props.destroyOnClose为 true 时 vIf = props.visible, vShow为 true;
       * */
      let rendered = !!props.visible; // 是否渲染
      const vIf = vue.ref(rendered);
      const vShow = vue.ref(true);
      vue.watch(
        () => props.visible,
        () => {
          if (rendered) {
            if (props.destroyOnClose) {
              vIf.value = props.visible;
              vShow.value = true;
            } else {
              vIf.value = true;
              vShow.value = props.visible;
            }
          } else {
            vIf.value = props.visible;
            rendered = true;
          }
        }
      );

      const afterLeave = () => {
        props.afterClose?.();
      };

      return {
        close,
        clickOnOverlay,
        onOk,
        onCancel,
        TiDialogClasses,
        TiDialogStyles,
        vIf,
        vShow,
        afterLeave
      }
    }
  };

  const _hoisted_1$1 = {
    key: 0,
    class: "ti-dialog-container"
  };
  const _hoisted_2 = /*#__PURE__*/vue.createElementVNode("div", { class: "ti-dialog-overlay" }, null, -1 /* HOISTED */);
  const _hoisted_3 = ["aria-label"];
  const _hoisted_4 = { class: "ti-dialog-header" };
  const _hoisted_5 = { class: "ti-dialog-title" };
  const _hoisted_6 = { class: "ti-dialog-content" };
  const _hoisted_7 = { class: "ti-dialog-footer" };

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_TiIcon = vue.resolveComponent("TiIcon");
    const _component_TiButton = vue.resolveComponent("TiButton");

    return (vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
      vue.createVNode(vue.Transition, {
        name: "dialog",
        duration: { enter: 400, leave: 250 },
        onAfterLeave: $setup.afterLeave
      }, {
        default: vue.withCtx(() => [
          ($setup.vIf)
            ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
                _hoisted_2,
                vue.createElementVNode("div", {
                  class: "ti-dialog-wrapper",
                  style: vue.normalizeStyle({ pointerEvents: $setup.vShow ? undefined : 'none' }),
                  onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => ($setup.clickOnOverlay && $setup.clickOnOverlay(...args)), ["self"]))
                }, [
                  vue.createElementVNode("div", {
                    class: vue.normalizeClass($setup.TiDialogClasses),
                    style: vue.normalizeStyle($setup.TiDialogStyles),
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": $props.title || 'dialog'
                  }, [
                    vue.createElementVNode("div", _hoisted_4, [
                      vue.renderSlot(_ctx.$slots, "title", {}, () => [
                        vue.createElementVNode("span", _hoisted_5, vue.toDisplayString($props.title), 1 /* TEXT */)
                      ]),
                      ($props.showClose)
                        ? (vue.openBlock(), vue.createBlock(_component_TiIcon, {
                            key: 0,
                            class: "ti-dialog-close",
                            icon: "close",
                            onClick: $setup.close
                          }, null, 8 /* PROPS */, ["onClick"]))
                        : vue.createCommentVNode("v-if", true)
                    ]),
                    vue.createElementVNode("div", _hoisted_6, [
                      vue.renderSlot(_ctx.$slots, "default")
                    ]),
                    vue.createElementVNode("div", _hoisted_7, [
                      vue.renderSlot(_ctx.$slots, "footer", {}, () => [
                        vue.createVNode(_component_TiButton, {
                          class: "ti-dialog-footer-default-slot-button",
                          onClick: $setup.onCancel
                        }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode(vue.toDisplayString($props.cancelText), 1 /* TEXT */)
                          ]),
                          _: 1 /* STABLE */
                        }, 8 /* PROPS */, ["onClick"]),
                        vue.createVNode(_component_TiButton, {
                          class: "ti-dialog-footer-default-slot-button",
                          onClick: $setup.onOk
                        }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode(vue.toDisplayString($props.okText), 1 /* TEXT */)
                          ]),
                          _: 1 /* STABLE */
                        }, 8 /* PROPS */, ["onClick"])
                      ])
                    ])
                  ], 14 /* CLASS, STYLE, PROPS */, _hoisted_3)
                ], 4 /* STYLE */)
              ], 512 /* NEED_PATCH */)), [
                [vue.vShow, $setup.vShow]
              ])
            : vue.createCommentVNode("v-if", true)
        ]),
        _: 3 /* FORWARDED */
      }, 8 /* PROPS */, ["onAfterLeave"])
    ]))
  }

  script$1.render = render$1;
  script$1.__file = "src/packages/dialog/dialog.vue";

  var Dialog = installPlugins(script$1);

  // manipulate camelCase to kebab-case
  /**
   * 重写js native toFixed 方法
   * @param d
   * @param number
   * @returns { string | number }
   */
  function toFixed(d, number) {
      if (number === undefined) {
          // @ts-ignore
          number = this;
      }
      if (!number && number !== 0) {
          return '';
      }
      if (!/^(-|\+)?\d+(?:\.\d+)?$/.test(number)) {
          return '';
      }
      let s = number + '';
      if (!d && d !== 0)
          d = 2;
      d = parseInt(d);
      if (s.indexOf('.') === -1)
          s += '.';
      s += new Array(d + 1).join('0');
      if (new RegExp('^(-|\\+)?(\\d+(\\.\\d{0,' + (d + 1) + '})?)\\d*$').test(s)) {
          s = '0' + RegExp.$2;
          const pm = RegExp.$1;
          let a = RegExp.$3.length;
          let b = true;
          if (a === d + 2) {
              a = s.match(/\d/g);
              if ((pm !== '-' && parseInt(a[a.length - 1]) > 4) ||
                  (pm === '-' && parseInt(a[a.length - 1]) > 5)) {
                  for (let i = a.length - 2; i >= 0; i--) {
                      a[i] = parseInt(a[i]) + 1;
                      if (a[i] === 10) {
                          a[i] = 0;
                          b = i !== 1;
                      }
                      else
                          break;
                  }
              }
              s = a.join('').replace(new RegExp('(\\d+)(\\d{' + d + '})\\d$'), '$1.$2');
          }
          if (b)
              s = s.substr(1);
          return (pm + s).replace(/\.$/, '');
      }
      // @ts-ignore
      return this + '';
  }

  // 第n位小数“向上取整”
  function fractionCeil(d, number) {
      if (!d) {
          return Math.ceil(number);
      }
      const numberStr = `${number + Math.pow(10, -14)}`;
      const reg = new RegExp(`(^(-|\\\\+)?\\d+\\.\\d{${d}})\\d*`);
      const r = numberStr.match(reg);
      return r && toFixed(d, +r[1] + (1 / Math.pow(10, d)) * (+r[1] > 0 ? 1 : -1));
  }
  var script = vue.defineComponent({
      name: 'TiDigitalTransition',
      props: {
          start: {
              type: Number,
              default: 0
          },
          end: {
              type: Number
          },
          step: {
              type: Number,
              default: 1
          },
          interval: {
              type: Number,
              default: 16 // ms
          },
          // 当 duration 存在时，step 参数无效。单位：ms
          duration: {
              type: Number,
              default: 3000
          },
          accuracy: {
              type: Number,
              default: 0
          }
      },
      emit: ['ended', 'updated'],
      setup(props, { slots, emit }) {
          const { start, step, interval } = vue.toRefs(props);
          const endProp = vue.toRef(props, 'end');
          const durationProp = vue.toRef(props, 'duration');
          const endValue = vue.computed(() => {
              var _a, _b, _c;
              return +(endProp.value || ((_c = (_b = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.children) || 0);
          });
          let tickValue = vue.ref(start.value);
          let digital = vue.computed(() => {
              return +toFixed(props.accuracy, tickValue.value);
          });
          const timerFn = (() => {
              let timer;
              return (start, end, emitName) => {
                  const sv = start.value;
                  const ev = end.value;
                  if (timer)
                      clearInterval(timer);
                  // 当duration存在时，计算step，否则使用用户传入的step
                  const computedStep = vue.computed(() => {
                      return durationProp.value
                          ? fractionCeil(6 /* hack */, (ev - sv) / Math.floor(durationProp.value / interval.value))
                          : step.value;
                  });
                  timer = setInterval(() => {
                      start.value =
                          computedStep.value > 0
                              ? Math.min(start.value + +computedStep.value, end.value)
                              : Math.max(start.value + +computedStep.value, end.value);
                      if ((computedStep.value > 0 && start.value >= end.value) ||
                          (computedStep.value < 0 && start.value <= end.value)) {
                          emit(emitName, end.value);
                          clearInterval(timer);
                      }
                  }, interval.value);
              };
          })();
          vue.onMounted(() => {
              timerFn(tickValue, endValue, 'ended');
          });
          vue.watch(() => endValue.value, (newVal) => {
              timerFn(tickValue, vue.ref(newVal), 'updated');
          });
          return {
              digital
          };
      }
  });

  const _hoisted_1 = { class: "ti-tickValue-transition" };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("span", _hoisted_1, vue.toDisplayString(_ctx.digital), 1 /* TEXT */))
  }

  script.render = render;
  script.__file = "src/packages/digital-transition/digital-transition.vue";

  var DigitalTransition = installPlugins(script);

  const plugins = [Button, ButtonGroup, Icon, Switch, Dialog, DigitalTransition];
  function install(app) {
      plugins.forEach(app.use);
  }
  var index = {
      install
  };

  exports.Button = Button;
  exports.ButtonGroup = ButtonGroup;
  exports.Dialog = Dialog;
  exports.DigitalTransition = DigitalTransition;
  exports.Icon = Icon;
  exports.Switch = Switch;
  exports["default"] = index;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
