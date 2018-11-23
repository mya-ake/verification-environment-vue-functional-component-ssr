<script>
export default {
  functional: true,
  render(h, { data, children }) {
    return h('base-button', {
      ...data,
      class: {
        'button--wrapper': true,
      },
    }, children);
  },
}
</script>

<style scoped>
.button--wrapper {
  border: none;
  padding: 8px 24px;
  background-color: blue;
  color: white;
  font-size: 1rem;
}
</style>
