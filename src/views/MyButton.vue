<script lang="tsx">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'MyButton',
  setup() {
    const myName = inject('username')
    console.log('myName', myName)
  },
  created() {
    console.log('MyButton has changed!')
  },
  updated() {
    console.log('MyButton has updated!')
  },
  render() {
    console.log('MyButton has render!')
    return <div>Button</div>
  }
})
</script>

<style scoped module>
.red {
  color: red;
}
</style>
