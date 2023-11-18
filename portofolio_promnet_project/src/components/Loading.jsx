function Loading() {
    return (<div className="fixed top-0 left-0 w-full h-screen bg-white flex justify-center items-center">
        <svg className="h-96 w-96" version="1.1" id="L2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
            <circle fill="none" stroke="#a09dc5" strokeWidth="4" strokeMiterlimit="10" cx="50" cy="50" r="48" />
            <line fill="none" strokeLinecap="round" stroke="#a09dc5" strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
                <animateTransform
                    attributeName="transform"
                    dur="2s"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite" />
            </line>
            <line fill="none" strokeLinecap="round" stroke="#a09dc5" strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
                <animateTransform
                    attributeName="transform"
                    dur="15s"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite" />
            </line>
        </svg>

    </div>)
}

export default Loading