import React from 'react';

class ComponentLifeCycle extends React.Component {
    constructor(){
        console.clear();
        console.log('constructor');
        super();
        this.state = {
            s1: 0
        }
    }

    btnHandler = () => {
        let val = this.state.s1
        val++;
        this.setState()
        console.log("btnHandler worked")
    }
    render() {
        console.log('render 1');
        return (
            <>
                {console.log('render 2')}
                <div>
                    <button onClick={this.btnHandler}>Push</button>
                </div>
                <div>
                    {this.state.s1}
                </div>
            </>
        )
    }
}

// export default ClassComponentLifeCycle;