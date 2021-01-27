import React from 'react'



export class ProfileStatus extends React.Component{

    state = {
        statusRead : false,
        status : this.props.status.text
    }
    async activateStatusWrite(){
        if(this.state.statusRead === true){
            await this.props.updateStatus(this.state.status)
        }
        if(this.props.editMode){
            this.setState({
                statusRead : !this.state.statusRead
            })
        }

    }
    valueStatus(e){
        this.setState({
            status:e.target.value
        })
        console.log(this.state.status)
    }
    render(){
        return(
            <div>
                {(this.state.statusRead ) ?
                    <div>
                        <input autoFocus={true} onBlur={this.activateStatusWrite.bind(this)} onChange={this.valueStatus.bind(this)} value={this.state.status}  className='form-control'  type="text" />
                    </div>
                    :
                    <div >
                        <span className='profile-data-information__status' onClick={this.activateStatusWrite.bind(this)} >{this.props.status.text}</span>
                    </div>
                }

            </div>
        )
    }

}

// status === "" ? this.setState({status:"Введите статус"})  :