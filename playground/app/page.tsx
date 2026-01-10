'use client'

export default function Home() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('count', count)
  }, [count])

  return (
    <div className={cn('flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black')}>
      <main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start'>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </main>
    </div>
  )
}
