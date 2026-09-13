import { createContext, useContext, type ReactNode } from 'react';
import type { Timer } from '@/types';

interface TimersState {
    isRunning: boolean;
    timers: Timer[];
}

interface TimersContextValue extends TimersState {
    addTimer: (timerData: Timer) => void;
    startTimers: () => void;
    stopTimers: () => void;
}

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
    const timersCtx = useContext(TimersContext);

    if (timersCtx === null) {
        throw new Error('TimersContext is null');
    }

    return timersCtx;
}

interface TimersContextProviderProps {
    children: ReactNode;
}

function TimersContextProvider({ children }: TimersContextProviderProps) {
    const ctx: TimersContextValue = {
        timers: [],
        isRunning: false,
        addTimer(timerData) {
            console.log(timerData);
        },
        startTimers() {},
        stopTimers() {},
    };
    return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>;
}

export default TimersContextProvider;
