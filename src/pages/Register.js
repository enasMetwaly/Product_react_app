import React, { useState } from "react";


export default function Register() {
    const [userForm, setUserForm] = useState({
        name: "",
        email:null,
        password:null,
        confirmPassword: null,

      });
      const [userFormError, setUserFormErrors] = useState({
        name: null,
        password:null,
        email:null,
        confirmPassword: null,
      });
      const handleInputChange = (e) => {
    
        // setUserForm({
        //   ...userForm,
        //   [e.target.name]: e.target.value,
        // });
        if (e.target.name === "name") {
          setUserForm({
            ...userForm,
            name: e.target.value,
          });
    
          setUserFormErrors({
            ...userFormError,
            name:
              e.target.value.length === 0
                ? "This field is required"
                : e.target.value.length < 3
                ? "Min. Length is 3"
                : e.target.value.includes(" ")
                ? "Name must not contain spaces"          
                : null,
          });
        }
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if (e.target.name === "email") {
          setUserForm({
            ...userForm,
            email: e.target.value,
          });
        
          setUserFormErrors({
            ...userFormError,
            email:
              e.target.value.length === 0
                ? "This field is required"
                : !emailRegex.test(e.target.value)
                ? "Invalid email address"
                : null,
          });
        }
        
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@*%$#]).{8,}$/i;

        if (e.target.name === "password") {
          setUserForm({
            ...userForm,
            password: e.target.value,
          });
        
          setUserFormErrors({
            ...userFormError,
            
            password:
              e.target.value.length === 0
                ? "This field is required"
                : !passwordRegex.test(e.target.value)
                ? "Invalid password format"
                : null,
          });
        }
        if (e.target.name === "confirmPassword") {
            setUserForm({
              ...userForm,
              confirmPassword: e.target.value,
            });
          
            setUserFormErrors({
              ...userFormError,
              confirmPassword:
                e.target.value.length === 0
                  ? "This field is required"
                  : e.target.value !== userForm.password
                  ? "Passwords do not match"
                  : null,
            });
           }
           
          
          
          
          
        
    };

    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userForm);
      };
    



    return(


        <>
        <section class="vh-100" style={{backgroundColor:"#eee"}}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius: "25px"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4"  onSubmit={handleSubmit}>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input  
                                  value={userForm.name}
                                  onChange={handleInputChange}
                                  name="name"
                                  autocomplete="name"
                      
                      type="text" id="nameInput" class="form-control"        />
                      <label class="form-label" htmlFor="nameInput">Your Name</label>
                      <p className="text-danger">{userFormError.name}</p>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input
                            id="emailInput" 
                            value={userForm.email}
                            onChange={handleInputChange}
                            name="email" 
                            autoComplete="email"                     
                           class="form-control" />
                      <label class="form-label" for="emailInput">Your Email</label>
                      <p className="text-danger">{userFormError.email}</p>

                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password"
                                                  id="passwordInput" 
                                                  value={userForm.password}
                                                  onChange={handleInputChange}
                                                  name="password" 
                                                  autoComplete="password"                     
                     
                      
                      
                     class="form-control" />
                      <label class="form-label" for="passwordInput">Password</label>
                      <p className="text-danger">{userFormError.password}</p>

                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password"
                      id="password_confirmationInput" 
                    value={userForm.confirmPassword}
                    onChange={handleInputChange}
                     name="confirmPassword"                      
                      
                      class="form-control" />
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                      <p className="text-danger">{userFormError.confirmPassword}</p>

                    </div>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button onClick={()=>console.log("enas")} class="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
    )
}

