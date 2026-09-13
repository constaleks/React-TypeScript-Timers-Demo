import type { Timer as TimerType } from '@/types';

import { Progress } from './ui/progress';

interface TimerProps extends TimerType {
    time: number;
}

function Timer({ name, duration, time }: TimerProps) {
    const progress = ((duration * 1000 - time) / (duration * 1000)) * 100;
    const formattedTime = (time / 1000).toFixed(2);

    return (
        <div className="space-y-3 p-2 border rounded-lg">
            <h4 className="text-lg font-semibold text-center">{name}</h4>
            <Progress value={progress} />
            <p className="text-center">{formattedTime}</p>
        </div>
    );
}

export default Timer;
