import React from 'react'

const LineNumbersChildComponent = () => {
        const nums = []
        for (let x = 1; x <= 100; x++) {
                nums.push(x)
        }
        const renderNums = nums.map((num, index) => {
        return <li key={index}>{num}</li>
        })

        return (
                <ul>
                        { renderNums }
                </ul>
        )
}

export default LineNumbersChildComponent
