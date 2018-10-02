import React from 'react';

class SketchBoard extends React.Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        this.reset();
    }

    draw(e) { //response to Draw button click 
        this.setState({
            mode:'draw',
        })
    }

    erase() { //response to Erase button click
        this.setState({
            mode:'erase',
        })
    }

    drawing(e) { //if the pen is down in the canvas, draw/erase

        if(this.state.pen === 'down') {

            this.ctx.beginPath();
            this.ctx.lineWidth = this.state.lineWidth;
            this.ctx.lineCap = 'round';


            if(this.state.mode === 'draw') {
                this.ctx.strokeStyle = this.state.penColor
            }

            if(this.state.mode === 'erase') {
                this.ctx.strokeStyle = '#ffffff'
            }

            this.ctx.moveTo(this.state.penCoords[0], this.state.penCoords[1]) //move to old position
            this.ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY) //draw to new position
            this.ctx.stroke();

            this.setState({ //save new position 
                penCoords:[e.nativeEvent.offsetX, e.nativeEvent.offsetY]
            })
        }
    }

    penDown(e) { //mouse is down on the canvas
        this.setState({
            pen:'down',
            penCoords:[e.nativeEvent.offsetX, e.nativeEvent.offsetY]
        })
    }

    penUp() { //mouse is up on the canvas
        this.setState({
            pen:'up'
        })
    }

    reset() { //clears it to all white, resets state to original
        this.setState({
            mode: 'draw',
            pen : 'up',
            lineWidth : 10,
            penColor : 'lightgrey'
        })

        this.ctx = this.refs.canvas.getContext('2d')
        this.ctx.fillStyle="white"
        this.ctx.fillRect(0,0,8000,6000)
        this.ctx.lineWidth = 10
    }

    render() {
    	const styles = {
		    canvas : {
		        border:'1px solid lightgrey',
		        borderRadius:'10px', 
		    },

		    maindiv : {
		        padding:'10px',
		        position:'fixed',
		        left:'10px',
		        right:'10px'
		    }
		}

        return (
            <div style={styles.maindiv}>
                <canvas ref="canvas" style={styles.canvas} 
                    onMouseMove={(e)=>this.drawing(e)} 
                    onMouseDown={(e)=>this.penDown(e)} 
                    onMouseUp={(e)=>this.penUp(e)}>
                </canvas>
            </div>
        )
    }
}

export default SketchBoard;