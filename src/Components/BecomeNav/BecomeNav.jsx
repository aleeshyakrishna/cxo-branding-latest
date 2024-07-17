import React from 'react';
import styles from './BecomeNav.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function BecomeNav() {
    const Messages = [
        "Best offers!",
        "Limited time offer! Don't miss out!",
        "Exclusive deals for our members!",
        "Check out our latest promotions!"
    ];
    return (
        <div>
            <div className={styles.mainBecom}>
                <button type="button" className="btn btn-primary">Become a Mentor</button>
                <button type="button" className="btn btn-secondary">Become an Industry Mentor</button>
                <button type="button" className="btn btn-success">Become an Investor</button>
                <button type="button" className="btn btn-danger">Community of CEOs</button>
                <button type="button" className="btn btn-warning">Business Startup Ideas</button>
                <button type="button" className="btn btn-info">Podcasts for CXOs</button>
                <button type="button" className="btn btn-light">Find an Investor</button>
                <button type="button" className="btn btn-dark">Magazines</button>

                {/* <div className={styles.marquee}>
                    <div className={styles.marqueeInner}>
                        {Messages.map((msg, index) => (
                            <p key={index}>{msg}</p>
                        ))}
                    </div>
                </div> */}
            </div>
            </div>
            );
}

            export default BecomeNav;
