

# RN Auth

- `LoginScreen.js`
  
  - `LoginForm.js`: navigation  passed
  
    -`Login (props)`: called by redux form
      - `props.handleSubmit(submit)`: Built in redux function
        - `submit()` 
            - waits for the redux `dispatch()` : waits to set the username and pwd on state.
              - `AuthAction.js`
            - the redux dispatch calls `LoginAction`
              - This is an alias for `Login (email, password)` in the Auth action class
            - then redirects to home page
        - 




                    

                