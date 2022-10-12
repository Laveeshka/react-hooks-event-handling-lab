// Code EyesOnMe Component Here
function EyesOnMe(){
    //callback functions
    function buttonFocusHandler(){
        console.log("Good!")
    }

    function buttonBlurHandler(){
        console.log('Hey! Eyes on me!')
    }

    //render
    return (
        <button onFocus={buttonFocusHandler} onBlur={buttonBlurHandler}>Eyes on me</button>
    )
}

export default EyesOnMe;