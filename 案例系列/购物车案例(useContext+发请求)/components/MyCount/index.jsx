import { useContext } from 'react'
import './index.scss'
import { AppContext } from '../../App.jsx'
export default function MyCount({ count, id }) {
  const { handleChangeCount } = useContext(AppContext)
  const handelSub = () => {
    handleChangeCount(id, count - 1)
  }
  const handleAdd = () => {
    handleChangeCount(id, count + 1)
  }
  return (
    <div className="my-counter">
      <button type="button" className="btn btn-light" onClick={handelSub}>
        -
      </button>
      <input type="number" className="form-control inp" value={count} readOnly />
      <button type="button" className="btn btn-light" onClick={handleAdd}>
        +
      </button>
    </div>
  )
}
