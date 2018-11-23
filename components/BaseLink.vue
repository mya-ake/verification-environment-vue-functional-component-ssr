<script>
export default {
  name: 'base-link',

  props: {
    to: {
      type: String,
      required: true,
    },
  },

  render(h) {
    const data = {};

    data.attrs = { href: this.to };

    return h('a', data, this.$slots.default);
  },
}
</script>
