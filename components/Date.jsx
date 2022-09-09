const d = new Date();

const day = d.getDay();
const currentDay = d.getDate();
const currentMonth = d.getMonth() + 1;
export const currentYear = d.getFullYear();

const daysOfTheWeek = ["日", "月", "火", "水", "木", "金", "土"];

let today = daysOfTheWeek[day];

export default function TodayDate() {
    return (
        <>
            {currentDay}日{currentMonth}月{currentYear}年 ({today})
        </>
    )
}

/*
    getMonth()
    The getMonth() method returns the month of a date as a number from 0 to 11.
    To get the correct month, you must add 1
*/