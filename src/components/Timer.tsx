import type { Timer as TimerType } from '@/types';

function Timer({ name, duration }: TimerType) {
    return (
        <div>
            <h4>{name}</h4>
            <p>{duration}</p>
        </div>
    );
}

export default Timer;
