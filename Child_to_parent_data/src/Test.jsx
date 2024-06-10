function Test(props){
    return(
        <>
            <div className="main">
                <h2>Hello {props.data}</h2>
                <button onClick={() => props.showAlert("Welcome Saturo")}>Click Me</button>
            </div>          
        </>
    )
}

export default Test;