import React from 'react'
import "./TextSpace.css"

const TextSpace = () => {
    return (
        <div className="air">
            <chance>
                Contact Us
            </chance>
            <form method="post">
                <div className="general">
                    <channel>
                        <div className="top">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" name="fname" id="fname" placeholder='Enter your name' />
                        </div>
                        <div className="top2">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" name="lname" id="lname" placeholder='Enter your name' />
                        </div>
                    </channel>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder='Enter your email' />
                    </div>
                    <div className="textmsg">
                        <label htmlFor="msg">Message</label>
                        <textarea name="msg" id="msg" rows="6" placeholder="Write" />
                    </div>
                    <div className="send_btn">
                        <button type="submit"> Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TextSpace
