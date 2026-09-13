import { useTimersContext } from '@/store/TimersContext';
import Timer from './Timer';

function Timers() {
    const { timers } = useTimersContext();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
            {timers.map((item) => (
                <Timer key={item.id} id={item.id} name={item.name} duration={item.duration} time={item.time} />
            ))}
        </div>
    );
}

export default Timers;
