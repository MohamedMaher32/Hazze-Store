import error from '../../Assets/error.svg'
export default function Notfound() {
  return (
    <div className='d-flex justify-content-center align-item-center mt-5'>
        <img src={error} alt="notfound" className='w-50 mt-5'/>
    </div>
  )
}