// Code Keypad Component Here

function Keypad (){
    //callback function
    function passwordInputHandler(){
        console.log('Entering password...')
    }

    return (
        <div>
            <input type="password" name="password" onChange={passwordInputHandler}></input>
        </div>
    )
}

export default Keypad;