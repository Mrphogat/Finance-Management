import React, { useRef } from 'react';

const ScrollToBottom = () => {
    const messagesEndRef = useRef(null);
    const messagesStartRef = useRef(null); // For scrolling to the top

    const messages = [
        "Hello!",
        "How are you?",
        "This is a message.",
        "Another message.",
        "Last message.",
        "What are you doing?",
        "Let's catch up soon!",
        "Have a great day!",
        "See you later!",
        "Goodbye!",
        "It's a beautiful day!",
        "What’s your plan for today?",
        "Did you watch the match?",
        "I’m feeling great!",
        "Let’s meet up soon.",
        "How’s the weather?",
        "I love this song!",
        "Can we talk later?",
        "Have you seen that movie?",
        "I’m busy right now.",
        "Let’s go for a walk!",
        "I need some coffee.",
        "Hope you’re doing well!",
        "Stay safe and healthy!",
        "Happy Birthday!",
        "Congratulations on your success!",
        "I miss our old times.",
        "Let’s play a game!",
        "I’m learning React now.",
        "Do you like coding?",
        "It’s so peaceful here.",
        "What’s your favorite food?",
        "Have you read this book?",
        "Let’s plan a trip!",
        "I’m feeling sleepy.",
        "Talk to you soon!",
        "Can you help me with this?",
        "I’m on my way.",
        "Let’s catch up tomorrow!",
        "This is so funny!",
        "I’m so proud of you!",
        "Great job on the project!",
        "We should go out more.",
        "Did you hear that news?",
        "Let’s grab dinner tonight.",
        "I love spending time with you."
    ];

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        messagesStartRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div style={styles.chatContainer}>
            <div style={styles.chatBox}>
                <div ref={messagesStartRef} /> {/* Reference for top */}
                {messages.map((msg, index) => (
                    <p key={index} style={styles.message}>{msg}</p>
                ))}
                <div ref={messagesEndRef} /> {/* Reference for bottom */}
            </div>

            <div style={styles.buttonContainer}>
                <button onClick={scrollToBottom} style={styles.scrollButton}>Scroll to Bottom</button>
                <button onClick={scrollToTop} style={styles.scrollButton}>Scroll to Top</button>
            </div>
        </div>
    );
};

const styles = {
    chatContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: 'radial-gradient(circle, #1e3c72, #2a5298)',
        padding: '30px',
        borderRadius: '20px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
        minHeight: '100vh'
    },
    chatBox: {
        background: 'linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb)',
        padding: '15px',
        borderRadius: '15px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        maxHeight: '300px',
        overflowY: 'auto',
        width: '350px',
        border: '2px solid #ffffff',
        marginBottom: '15px',
        color: '#fff',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)'
    },
    message: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: '10px 15px',
        borderRadius: '10px',
        margin: '8px 0',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        transition: 'background 0.3s ease',
        fontSize: '16px',
        cursor: 'pointer'
    },
    buttonContainer: {
        display: 'flex',
        gap: '10px',
        marginTop: '10px'
    },
    scrollButton: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        fontWeight: 'bold',
        background: '#ff6f91',
        color: '#fff',
        transition: 'background 0.3s ease, transform 0.2s ease',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
    }
};

export default ScrollToBottom;
