function LogIn(props) {
    return(
        <div>
           
            {
                props.isLoggedIn ? (
                    <div>Hi <strong>Skillup labs</strong></div>
                ) : (
                    <button>Sign In</button>

                )
                
            }
            {
                  props.isLoggedIn && (<div>Hi <strong>Skillup labs</strong></div>)}

        </div>
    )
}
export default LogIn;