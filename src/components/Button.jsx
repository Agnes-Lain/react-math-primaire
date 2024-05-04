
export default function Button({title, onClick, ...otherProps}){

  return (
    <button
      className='formula-button'
      onClick={onClick}
      {...otherProps}
    >
      {title}
    </button>
  )
}
