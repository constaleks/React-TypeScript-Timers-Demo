import Header from './Header';
import TimerForm from './TimerForm';
import Timers from './Timers';
import { Separator } from './ui/separator';

function Container() {
    return (
        <div className="flex flex-col items-center justify-start gap-6 bg-slate-100 p-8 rounded-lg md:min-w-[500px] md:min-h-[500px]">
            <Header />
            <TimerForm />
            <Separator />
            <Timers />
        </div>
    );
}

export default Container;
