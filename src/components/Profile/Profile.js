import React from 'react';
import ReactTable from 'react-table';






class profile extends React.Component{
constructor(props) {
        super(props);
        this.state = {
            posts:[]
        }
    }
    componentDidMount(){
    	console.log("hello world");
    	const url="https://jsonplaceholder.typicode.com/posts";
    	fetch(url,{
    		method:"GET"
    	}).then(response=>response.json()).then(posts=>{
    		this.setState({posts:posts})
    	})
    }
    // onEmailChange = (event) => {
    //     this.setState({ email: event.target.value})
    // }
    // onNameChange = (event) => {
    //     this.setState({ password: event.target.value})
    // }
    // onSubmitSignIn = () => {
        // fetch('http://localhost:3001/updateProfile', {
        //     method: 'post',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         email: this.state.email,
        //         password: this.state.password,
        //         name:this.state.name
        //     })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data === 'successfully updated') {
        //         this.props.onRouteChange('home');
        //     }
        // })  
    //     return;
    // }



render(){
	const columns =[
	{
		Header:"user name",
		accessor:"userId"
	},
	{
		Header:"Email",
		accessor:"id"
	},
	{
		Header:"Full Name",
		accessor:"title"
	},
	{
		Header:"user name",
		accessor:"body"
	}
	];

    return(
<div>
	
	<h1>this is profile</h1>
	<div>
	<ReactTable columns={columns}
	data= {this.state.posts}>

	</ReactTable>
	</div>


</div>





	);

}




}





export default profile;