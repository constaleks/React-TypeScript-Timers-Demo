import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';
import { Input } from './ui/input';
import { Button } from './ui/button';

function TimerForm() {
    return (
        <form className="space-y-3 w-full flex flex-col items-end">
            <div className="flex gap-4 w-full">
                <Field>
                    <FieldLabel htmlFor="name">Name</FieldLabel>
                    <Input id="name" type="text" placeholder="Enter name" />
                    <FieldDescription>Set a name for your timer</FieldDescription>
                </Field>

                <Field>
                    <FieldLabel htmlFor="duration">Duration</FieldLabel>
                    <Input id="duration" type="number" placeholder="Enter duration" />
                    <FieldDescription>Set a duration for your timer</FieldDescription>
                </Field>
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default TimerForm;
