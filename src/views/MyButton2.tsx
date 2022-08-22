import { defineComponent, ref } from 'vue'

const count = ref(10)

type MyButton2Props = {
  /** some */
  name: string
  /** test */
  age: number
}

const myClass = {
  color: 'red'
}

export default function MyButton2(props: MyButton2Props) {
  console.log('props in MyButton2: ', props.name)
  return (
    <div>
      <span style={myClass}>{count.value}</span>
      <button
        onClick={() => {
          count.value = count.value + 10
        }}
      >
        count++
      </button>
    </div>
  )
}
