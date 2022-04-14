<script lang="tsx">
import { defineComponent, useCssModule } from 'vue'


const $style = useCssModule()
console.log('$style: ', $style);

export default defineComponent({
  name: 'MyButton',
  render() {
    return <div>Button</div>
  }
})
</script>

<style module>
.red {
  color: red;
}
</style>