import React, { useState } from 'react';
import Navbar from './../../Components/Navbar/Navbar.jsx';
import styles from "./ResumeWriting.module.css";
import ResumeCarosal from "../../Components/ResumeTemplates/ResumeCarosel.jsx";
import Footer from '../../Components/Footer/Footer.jsx';
import Form from "../../Components/Form/Form.jsx";
import Modal from 'react-modal';
import process from "./Images/process.png";

const ResumeWriting = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
    };

    return (
        <div>
            <Navbar />
            <div className={styles.main}>
                <h1>Resume <span className={styles.secondWord}>Writing</span></h1>
                <button className={styles.scheduleCalendly}>Schedule a call</button>
            </div>
            <div className={styles.mainMain}>
                <div className={styles.resumeSamples}>
                    <div className={styles.sampleHeading}>
                        <h2>View <span className={styles.secondWord}>samples</span></h2>
                    </div>
                    <div className={styles.CarosalResume}>
                        <ResumeCarosal />
                    </div>
                    <button onClick={openModal}>Get Service</button>
                </div>
                <div className={styles.resumeSamples}>
                    <div className={styles.sampleHeading}>
                        <h2>Our <span className={styles.secondWord}>Process</span></h2>
                    </div>
                    <div className={styles.CarosalResumeImg}>
                        <img src={process} alt="Process" />
                    </div>
                    <button onClick={openModal}>Get Service</button>
                </div>
            </div>
            <Footer />
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Get Service Form"
                ariaHideApp={false}
            >
                <Form />
                {/* apiEndpoint="/resumeService"  */}
            </Modal>
        </div>
    );
};

export default ResumeWriting;
