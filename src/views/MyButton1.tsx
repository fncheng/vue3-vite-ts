import { defineComponent, ref } from 'vue'

// const count = ref(10)

export default defineComponent({
  name: 'MyButton1',
  setup() {
    const count = ref(10)
    return { count }
  },
  render() {
    return (
      <div>
        <span>{this.count}</span>
        <button
          onClick={() => {
            this.count = this.count + 10
          }}
        >
          count++
        </button>
      </div>
    )
  }
})
