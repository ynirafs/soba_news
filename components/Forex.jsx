import Marquee from 'react-fast-marquee'

export default function Forex({ entries }) {
    
    return (
        <Marquee speed="20" className="my-3">
            {entries.map(entry => {
                return (
                    entry[1] >= 1.00 
                    ? <span className="px-4 text-red-500">{entry[0]} {entry[1]} &#9660;</span> 
                    : <span className="px-4 text-green-500">{entry[0]} {entry[1]} &#9650;</span>
                )
            })}
        </Marquee>
    )
}

//  &#9650; ▲
//  &#9660; ▼