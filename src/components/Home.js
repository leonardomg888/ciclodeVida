//import { response } from 'express';
import React,{Component} from 'react'
import CardGift from './CardGift'


class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            gifs:[],
            limit:8,

        }
    }
    apiCall(url){
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    gifs : data.data
                })
                console.log("---------",data)
            }).catch(error => console.log(error))
    }

    componentDidMount(){
        console.log("el componente fue renderizado")
        this.apiCall(`https://api.giphy.com/v1/gifs/trending?api_key=aIfxklgxHlgGRU3K4gr28KOoRP0G8ohq&limit=${this.state.limit}&rating=g`)

    }
    componentDidUpdate(){
        console.log("El componente se ha actualizado ")
    }

    render(){
        return (
        <div className="container">
          {this.state.gifs.length === 0 && <p>Cargando....</p>}
            <div className="row text-center">
            {
                this.state.gifs.map((gif,index)=>{
                    return (
                        <div> 
                            <CardGift key={index} {...gif}     />
                        </div>
                    )
                })
            }
             </div>
          </div>

        )
    }

}
export default Home

