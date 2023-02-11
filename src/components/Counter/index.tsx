import { createSignal } from 'solid-js'

const CountingComponent = () => {
    const [count, setCount] = createSignal(0)
    return (
        <div>
            <button
                class="p-1 mr-1 bg-slate-600 hover:bg-red-200 rounded-md"
                onClick={() => setCount((c) => c + 1)}>
                😉
            </button>
            Count value is {count()}
        </div>
    )
}

export default CountingComponent
