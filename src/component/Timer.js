import React, { useEffect } from 'react';

const Timer = (props) => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 돌아가는 중')
        }, 1000);
        return () => {
            clearInterval(timer);
            console.log('타이머 종료')
        }
    }, []);  //재렌더링 되지 않게 하려고 대괄호 [] 넣음
    return (
        <div>
            <span>타이머~~~~ 콘솔에서 확인바랍니다</span>
        </div>
    );
};

export default Timer;