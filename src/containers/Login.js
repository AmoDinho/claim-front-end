import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import {Auth} from "aws-amplify";
import "./Login.css";
import * as Yup from "yup";
import {withFormik} from "formik";



export default class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }


    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();

        try{
            await Auth.signIn(this.state.email, this.state.password);
            this.props.userHasAuthenticated(true);
            this.props.history.push("/");
            console.log(this.state.email, this.state.password);
        } catch (e){
            alert(e.message);
          
        }
    }


    

  render(){

    const formikEnhancer = withFormik({
        validationSchema: Yup.object().shape({
            email: Yup.string()
               .email("Invalid Email Address")
               .required("Email is required"),
            password: Yup.string()
               .min(5, 'Password has to be longer than 5 characters')
               .required('Password is required')  
        }),
        mapPropsToValues: props => ({
        email: "",
        password:""
        })
    
    });
     
    const {
        email,
        password
    } = this.state

    const MyEnhancedForm = formikEnhancer(MyForm);


      return (
          <div className="Login">
          <MyEnhancedForm 
          onSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          valueemail={email}
          valuepass={password}
          />
          </div>
      );
  }

  
}

const MyForm = ({valueemail, valuepass,props, touched,handleSubmit,children,handleBlur,handleChange,errors}) => 
   

    
           <form handleSubmit={handleSubmit}>
           {children}
           <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            {errors.email &&
            touched.email && (
                <div style={{color:"red",marginTop:".5rem"}}>{errors.email}</div>
            )}
            <FormControl 
            autoFocus
            type="email"
            valueemail={valueemail}
            onChange={handleChange}
            onBlur={handleBlur}
            />
           </FormGroup>
           <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
         {errors.password &&
         touched.password && (
            <div style={{color:"red",marginTop:".5rem"}}>{errors.password}</div>
       )}            
       <FormControl 
            autoFocus
            type="password"
            valuepass={valuepass}
            onChange={handleChange}
            onBlur={handleBlur}

            />
           </FormGroup>
           <Button 
           block
           bsSize="large"
           //disabled={!this.validateForm()}
           type="submit"
           >
           Login
           </Button> 
           </form>
    
