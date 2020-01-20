import React, { Component }  from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    corrent: 0,
}

export default class Calculator extends Component {

    state = { ...initialState }

    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n 
        this.setState({ displayValue, clearDisplay: false })

        if (n !=='.') {
            const i = this.state.corrent
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
            console.log(values)
        }
    }
    
    render() {
        return (
            <div className="calculator">
                <Display print={this.state.displayValue} />
                <Button val="AC" click={this.clearMemory} triple/>
                <Button val="/" click={this.setOperation} operation/>
                <Button val="7" click={this.addDigit}/>
                <Button val="8" click={this.addDigit}/>
                <Button val="9" click={this.addDigit}/>
                <Button val="*" click={this.setOperation} operation/> 
                <Button val="4" click={this.addDigit}/>
                <Button val="5" click={this.addDigit}/>
                <Button val="6" click={this.addDigit}/>
                <Button val="-" click={this.setOperation} operation/>
                <Button val="1" click={this.addDigit}/>
                <Button val="2" click={this.addDigit}/>
                <Button val="3" click={this.addDigit}/>
                <Button val="+" click={this.setOperation} operation/>
                <Button val="0" click={this.addDigit} double/>
                <Button val="." click={this.addDigit}/>
                <Button val="=" click={this.setOperation} operation/>
            </div>
        )
    }
}