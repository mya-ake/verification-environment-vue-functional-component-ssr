const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()

const BaseButton = {
  name: 'base-button',
  render(h) {
    return h('button', null, this.$slots.default);
  },
};

const BaseButtonWrapper = {
  name: 'base-button-wrapper',
  functional: true,
  render(h, { children }) {
    return h('base-button', null, children);
  },
  _scopeId: '_scope_id_bbw',
};

const FuncBaseButton = {
  name: 'func-base-button',
  functional: true,
  render(h, { children }) {
    return h('button', null, children);
  },
}

const FuncBaseButtonWrapper = {
  name: 'func-base-button-wrapper',
  functional: true,
  render(h, { children }) {
    return h('func-base-button', null, children);
  },
  _scopeId: '_scope_id_fbbw',
}

Vue.component(BaseButton.name, BaseButton);
Vue.component(FuncBaseButton.name, FuncBaseButton);

const app = new Vue({
  template: `<div>
    <base-button-wrapper>test</base-button-wrapper>
    <func-base-button-wrapper>test</func-base-button-wrapper>
  </div>`,
  components: {
    BaseButtonWrapper,
    FuncBaseButtonWrapper,
  }
})



renderer.renderToString(app).then(html => {
  console.log(html)
  // html: <div data-server-rendered="true"><button>test</button> <button _scope_id_fbbw>test</button></div>
  // expect: <div data-server-rendered="true"><button _scope_id_fbbw>test</button> <button _scope_id_fbbw>test</button></div>
}).catch(err => {
  console.error(err)
})