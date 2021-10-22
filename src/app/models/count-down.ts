export class CountDownModel{
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    constructor(
        input:
        {
            days?:string,
            hours?:string,
            minutes?:string,
            seconds?:string
        } = {})
        {
            this.days = input.days ?? '00';
            this.hours = input.hours ?? '00';
            this.minutes = input.minutes ?? '00';
            this.seconds = input.seconds ?? '00';
        }
}