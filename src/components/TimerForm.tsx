import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';
import { Input } from './ui/input';
import { Button } from './ui/button';

import { useTimersContext } from '@/store/TimersContext';
import { useState, type ChangeEvent, type SubmitEvent } from 'react';

function TimerForm() {
    const { addTimer } = useTimersContext();

    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === 'name') {
            setName(e.target.value);
        } else {
            setDuration(e.target.value);
        }
    };

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name === '' || duration === '' || isNaN(+duration) || Number(duration) <= 0) {
            return;
        }

        addTimer({
            id: crypto.randomUUID(),
            name: name,
            duration: Number(duration),
        });
        setName('');
        setDuration('');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3 w-full flex flex-col items-end">
            <div className="flex gap-4 w-full">
                <Field>
                    <FieldLabel htmlFor="name">Name</FieldLabel>
                    <Input id="name" type="text" placeholder="Enter name" value={name} onChange={handleChange} />
                    <FieldDescription>Set a name for your timer</FieldDescription>
                </Field>

                <Field>
                    <FieldLabel htmlFor="duration">Duration</FieldLabel>
                    <Input id="duration" type="number" placeholder="Enter duration (seconds)" value={duration} onChange={handleChange} />
                    <FieldDescription>Set a duration for your timer</FieldDescription>
                </Field>
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default TimerForm;
