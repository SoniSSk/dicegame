import React, { useEffect, useState } from 'react'
import Dice from '../Component/Dice';
import style from './Home.module.css'

const Home = () => {
    const [selectedDiceValue, setSelectedDiceValue] = useState<number>(0)
    const [newGameStatus, setNewGameStatus] = useState<boolean>(false)
    const [bestScore, setBestScore] = useState<number>(0)
    const [count, setCount] = useState<number>(0)
    const [diceObj, setDiceObj] = useState([
        {
            id: 1,
            value: Math.floor(Math.random() * 6) + 1,
            selected: false,
        },
        {
            id: 2,
            value: Math.floor(Math.random() * 6) + 1,
            selected: false,
        },
        {
            id: 3,
            value: Math.floor(Math.random() * 6) + 1,
            selected: false,
        },
        {
            id: 4,
            value: Math.floor(Math.random() * 6) + 1,
            selected: false,
        },
        {
            id: 5,
            value: Math.floor(Math.random() * 6) + 1,
            selected: false,
        },
        {
            id: 6,
            value: Math.floor(Math.random() * 6) + 1,
            selected: false,
        },
        {
            id: 7,
            value: Math.floor(Math.random() * 6) + 1,
            selected: false,
        },
        {
            id: 8,
            value: Math.floor(Math.random() * 6) + 1,
            selected: false,
        },
        {
            id: 9,
            value: Math.floor(Math.random() * 6) + 1,
            selected: false,
        },
        {
            id: 10,
            value: Math.floor(Math.random() * 6) + 1,
            selected: false,
        }
    ]);

    const handleUpdateValueofdiceObjIfNotSelected = () => {
        setCount(count + 1)
        setDiceObj(diceObj.map((item: any) => {
            if (!item.selected) {
                return {
                    ...item,
                    value: Math.floor(Math.random() * 6) + 1,
                }
            }
            return item
        }))
    }

    const handleNewGame = () => {
        setCount(0)
        setNewGameStatus(false)
        setSelectedDiceValue(0)
        setDiceObj(diceObj.map((item: any) => {
            return {
                ...item,
                value: Math.floor(Math.random() * 6) + 1,
                selected: false
            }
        }))
    }

    useEffect(() => {
        const selectedDiceCount = diceObj.filter((item: any) => item.selected && item.value === selectedDiceValue)
        console.log(selectedDiceValue, "selectedDiceValue")
        if (selectedDiceCount.length === 10) {
            if (count < bestScore || bestScore === 0)
                setBestScore(count)
            setNewGameStatus(true)
        }
    }, [diceObj])


    return (
        <div className={style.main_container}>
            <div className={style.heading}>
                Roll The Dice
            </div>
            <div className={style.sub_heading}>
                Roll until all dice are the same. Click each dice to freeze it at its current value between rolls.
            </div>

            <div className={style.container}>
                {
                    diceObj.map((item: any) => {
                        return (
                            <div key={item.id}>
                                <Dice diceObj={diceObj} setDiceObj={setDiceObj} item={item} setSelectedDiceValue={setSelectedDiceValue} selectedDiceValue={selectedDiceValue} />
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <div className={style.button} >
                    {newGameStatus
                        ? <div onClick={handleNewGame}>New Game </div>
                        : <div onClick={handleUpdateValueofdiceObjIfNotSelected}> Roll</div>}
                </div>
            </div>
            <div className={style.score_board}>
                <div>
                    Roll Count: {count}
                </div>
                <div>
                    Best Score: {bestScore}
                </div>
            </div>
        </div>

    )
}

export default Home