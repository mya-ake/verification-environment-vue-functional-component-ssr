<script>
export default {
  functional: true,

  props: {
    to: {
      type: String,
      required: true,
    }
  },

  render(h, { props, data, children }) {
    return h('router-link', {
      ...data,
      class: {
        'button': true,
      },
      props,
    }, children);
  },
}
</script>

<style scoped>
.button {
  border: none;
  padding: 8px 24px;
  background-color: black;
  color: white;
  font-size: 1rem;
}
</style>
