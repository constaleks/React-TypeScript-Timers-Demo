import { createContext, useContext, useReducer, type ReactNode } from 'react';
import type { Timer } from '@/types';

interface TimersState {
    isRunning: boolean;
    timers: Timer[];
}

const initialState: TimersState = {
    isRunning: false,
    timers: [],
};

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

type TimersAction = {
    type: 'start_timers' | 'stop_timers';
};
type AddTimerAction = {
    type: 'add_timer';
    payload: Timer;
};

type Action = TimersAction | AddTimerAction;

function timersReducer(state: TimersState, action: Action): TimersState {
    if (action.type === 'start_timers') {
        return {
            ...state,
            isRunning: true,
        };
    }

    if (action.type === 'stop_timers') {
        return {
            ...state,
            isRunning: false,
        };
    }

    if (action.type === 'add_timer') {
        return {
            ...state,
            timers: [
                ...state.timers,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    duration: action.payload.duration,
                },
            ],
        };
    }

    return state;
}

interface TimersContextProviderProps {
    children: ReactNode;
}

function TimersContextProvider({ children }: TimersContextProviderProps) {
    const [timersState, dispatch] = useReducer(timersReducer, initialState);

    const ctx: TimersContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer(timerData) {
            dispatch({ type: 'add_timer', payload: timerData });
        },
        startTimers() {
            dispatch({ type: 'start_timers' });
        },
        stopTimers() {
            dispatch({ type: 'stop_timers' });
        },
    };
    return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>;
}

export default TimersContextProvider;
