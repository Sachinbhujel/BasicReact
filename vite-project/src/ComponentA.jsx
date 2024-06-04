import ComponentB from './ComponentB'

function ComponentA() {
    return (
      <>
        <div className="componentA">
            <h3>Component A</h3>
            <ComponentB />
        </div>      
      </>
    )
  }
  
  export default ComponentA