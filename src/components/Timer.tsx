import type { Timer as TimerType } from '@/types';
import { useEffect, useRef, useState } from 'react';

import { Progress } from './ui/progress';
import { useTimersContext } from '@/store/TimersContext';

function Timer({ name, duration }: TimerType) {
    const interval = useRef<number | null>(null);
    const [time, setTime] = useState(duration * 1000);
    const { isRunning } = useTimersContext();

    useEffect(() => {
        if (isRunning) {
            interval.current = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime <= 0) {
                        return prevTime;
                    }

                    return prevTime - 50;
                });
            }, 50);
        } else if (!isRunning && interval.current) {
            clearInterval(interval.current);
        }

        return () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
        };
    }, [isRunning]);

    useEffect(() => {
        if (time <= 0 && interval.current) {
            clearInterval(interval.current);
        }
    }, [time]);

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
