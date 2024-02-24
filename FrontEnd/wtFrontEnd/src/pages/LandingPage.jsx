import "../styling/LandingPage.css"

function LandingPage() {
    return (
        <>
        <div className="wholePage">
            <div className="leftSide">
                <p className='title'>InstaWeight</p>
            </div>
            <div className="rightSide">
                <button className="buttons">Sign In </button>
                <button className="buttons">Sign Up</button>
            </div>
        </div>
        </>
    )
}

export default LandingPage