import { defineComponent, ref, useCssModule } from 'vue'
import { ElButton, ElInput } from 'element-plus'
import styles from './MyButton1.module.css'

type ElFormRules = {
  rule: Array<ElFormRule>
}

type ElFormRule = {
  required?: true | false
  validator?: (rule: ElFormRule, value: any, callback: Function) => {}
  message: string
  trigger: string
}

// const count = ref(10)

export default defineComponent({
  name: 'MyButton1',
  props: {
    name: String,
    age: Number
  },
  setup() {
    const count = ref(10)
    // const style = useCssModule()
    const a = ref('')
    const msg = ref('')
    return { a, count, msg }
  },
  render() {
    console.log(styles)

    return (
      <div>
        <span class={styles.blue}>{this.count}</span>
        <p>111111</p>
        <button
          onClick={() => {
            this.count = this.count + 10
          }}
        >
          count++
        </button>
        <div>{this.name}</div>
        <div
          onClick={() => {
            console.log(this.name)
          }}
        >
          {this.age}
        </div>
        <ElButton style='width: 200px'>Button</ElButton>
        <div style={{ width: '200px' }}>
          <ElInput
            clearable
            vModel={this.a}
            onChange={(val) => {
              console.log(val)
            }}
          ></ElInput>
        </div>
        <input
          value={this.msg}
          onInput={(e) => {
            console.log((e.target as HTMLInputElement).value)
          }}
        ></input>
        <ElInput style='width: 200px' vModel={this.count}></ElInput>
        <div
          onClick={(e) => {
            console.log(e.target)
          }}
        >
          {this.a}
        </div>
      </div>
    )
  }
})
