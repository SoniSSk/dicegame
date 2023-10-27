import React from 'react';
import style from './Dice.module.css';

const Dice = (props: any) => {
    const { diceObj, setDiceObj, item, setSelectedDiceValue, selectedDiceValue } = props

    const handleChnageSelected = (id: number) => {
        if (item.selected) {
            setSelectedDiceValue(0)
        } else if (selectedDiceValue === 0) {
            setSelectedDiceValue(item.value)
        }
        const newDiceObj = diceObj.map((item: any) => {
            if (item.id === id) {
                return {
                    ...item,
                    selected: !item.selected
                }
            }
            return item
        })
        setDiceObj(newDiceObj)
    }

    return (
        <div className={item.selected ? style.selected : style.container}
            onClick={() => handleChnageSelected(item.id)}
        >
            {item.value}
        </div>
    )
}

export default Dice