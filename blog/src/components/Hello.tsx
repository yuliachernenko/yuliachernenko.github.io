//До лекції 34
export function formatDate(date:any) {
  return new Intl.DateTimeFormat(
    'en-US', { weekday: 'long'}
  ).format(date)
}

 export function Calc(props:any) {
  const sum = props.a + props.b;
  const date= new Date()
  return (
    <>
      <h2>It's today: {formatDate(date)} </h2>
      <p> Hi, I am {props.name}!</p>
      <p> The sum of numerics props I received is {sum}</p>
    </>
  )

}

export default function Hello(props:any) {
    const date= new Date()
    return (
        <>
            <h3>Hello, I'm {props.name}</h3>
            <h4>It's today: {formatDate(date)} </h4>
        </>
    )
}