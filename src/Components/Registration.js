import React, { Component } from 'react'

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            npiNumber: "",
            businessAddress: "",
            phoneNumber: "",
            email: "",
            errors: {
                firstName: '',
                lastName: '',
                npiNumber: '',
                businessAddress: '',
                phoneNumber: '',
                email: ''
            }
        }

        this.baseState=this.state;

        this.onSubmit = this.onSubmit.bind(this)

    }

    onSubmit(e) {
        e.preventDefault();
        document.getElementById("registration-message").innerHTML = "";
        if (this.validateSubmission()) {
            document.getElementById("registration-message").innerHTML = "Thank you for registering, " + this.state.firstName + "!  <br />A confirmation email will be sent to " + this.state.email + ".";
            this.resetForm();
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    resetForm = () => {
        this.setState(this.baseState);
    }

    validateSubmission() {
        let formIsValid = true;
        let errors = {};

        if (!this.state.firstName) {
            formIsValid = false;
            errors["firstName"] = "*Required";
        }

        if (!this.state.lastName) {
            formIsValid = false;
            errors["lastName"] = "*Required";
        }

        if (!this.state.npiNumber) {
            formIsValid = false;
            errors["npiNumber"] = "*Required";
        }

        if (!this.state.businessAddress) {
            formIsValid = false;
            errors["businessAddress"] = "*Required";
        }

        if (this.state.phoneNumber.length < 10) {
            formIsValid = false;
            if (!this.state.phoneNumber) {
                errors["phoneNumber"] = "*Required";
            }
            else {
                errors["phoneNumber"] = "*Not a full 10-digit number";
            }
        }

        if (!this.state.email) {
            formIsValid = false;
            errors["email"] = "*Required";
        }

        if (this.state.email) {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.email)) {
              formIsValid = false;
              errors["email"] = "*Not a valid email";
            }
          }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    render() {
        const { firstName, lastName, npiNumber, businessAddress, phoneNumber, email } = this.state;
        return (
            <>
            <h1 className = "card-title">Registration Form</h1>
             <div id="registration-message" className = "card-subsection">
             </div>
             <div className="card-subsection">
                <form id = "register" onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor='firstName'>First Name  <span className='errorMsg'>{this.state.errors.firstName}</span></label>
                        <input type='text' name='firstName' value={firstName} onChange={this.onChange} />
                        
                    </div>
                    <div>
                        <label htmlFor='lastName'>Last Name  <span className='errorMsg'>{this.state.errors.lastName}</span></label>
                        <input type='text' name='lastName' value={lastName} onChange={this.onChange} />
                        
                    </div>
                    <div>
                        <label htmlFor='npiNumber'>NPI Number  <span className='errorMsg'>{this.state.errors.npiNumber}</span></label>
                        <input type='text' name='npiNumber' value={npiNumber} onChange={this.onChange} />
                        
                    </div>
                    <div>
                        <label htmlFor='businessAddress'>Business Address  <span className='errorMsg'>{this.state.errors.businessAddress}</span></label>
                        <input type='text' name='businessAddress' value={businessAddress} onChange={this.onChange} />
                        
                    </div>
                    <div>
                        <label htmlFor='phoneNumber'>Phone Number  <span className='errorMsg'>{this.state.errors.phoneNumber}</span></label>
                        <input type='text' name='phoneNumber' value={phoneNumber} onChange={this.onChange} />
                        
                    </div>
                    <div>
                        <label htmlFor='email'>Email  <span className='errorMsg'>{this.state.errors.email}</span></label>
                        <input type='text' name='email' value={email} onChange={this.onChange} />
                        
                    </div>
                    <div>
                    <button type='Submit' name= 'submit'>
                        Submit
                    </button>
                    </div>
                </form> 
             </div>
            </>
        )
    }
}

export default Registration;

