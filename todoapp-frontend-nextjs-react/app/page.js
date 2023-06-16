import './page.css'

export default function Home() {
  return (
    <>
      <div className='page-title'>
        <h1>Todo App</h1>
      </div>
      <div className='page-tasks'>
        <ul>
          <li>tasks</li>
          <li>tasks</li>
        </ul>
      </div>
      <div className='page-forms'>
          <form action="">
            <label htmlFor="task">Input: </label>
            <input type="text"/>
            <br />
            <input type="submit" value="Submit" className='page-submit-button'/>
          </form>
      </div>
    </>
  )
}
