<script>
export default {
  name: 'base-button',
  functional: true,
  render(h, ctx) {
    const {data, children} = ctx;
    return h('button', {
      // ...data,
      class: {
        'button': true,
        ...data.class
      },
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
