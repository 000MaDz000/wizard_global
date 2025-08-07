
import React from 'react';
import { CopperLoading } from 'respinner';

const Loading = () => {
    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'radial-gradient(circle at top left, #e0f2ff, #f7fbff)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                position: "fixed",
                inset: 0
            }}
        >
            <CopperLoading id="spin" fill={"#0070f3"} style={{ zIndex: 60 }} />

            <p
                style={{
                    marginTop: '1.5rem',
                    fontSize: '1.25rem',
                    color: '#333',
                    fontWeight: '500',
                    fontFamily: 'system-ui, sans-serif',
                }}
            >

            </p>
        </div>
    );
};

export default Loading;
