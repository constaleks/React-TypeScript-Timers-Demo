import { Button } from './ui/button';
import { useTimersContext } from '@/store/TimersContext';

function Header() {
    const timersCtx = useTimersContext();

    return (
        <div className="flex justify-around w-full">
            <h1 className="text-lg font-semibold">Timers Demo</h1>
            <Button>{timersCtx.isRunning ? 'Stop' : 'Start'} Timers</Button>
        </div>
    );
}

export default Header;
