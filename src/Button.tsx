type ButtonProps = {
  text?: string,
}

function Button({ text }: ButtonProps) {
  return <h1 className='text-3xl font-bold underline text-slate-50'>Hello world!{text}</h1>
}

export default Button
