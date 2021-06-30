const TextInput = (props) => {
  return (
    <div className='subscribeForm-fieldWrap'>
      <label className='subscribeForm-label'>{props.label}</label>
      <input
        type={props.type ? props.type : 'text'}
        className='subscribeForm-field'
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  )
}
export default TextInput
