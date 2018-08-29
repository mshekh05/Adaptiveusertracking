Name: Mohamad Mudassar shekh
ASUID: 1211247229
Email:mshekh@asu.edu
Hi please follow the below steps for execution.


Web app:
1. Go to https://adaptivedb.herokuapp.com/
2. Click on the Visualization button on the Top Left.
3. You can now see and interact with the visualization.
4. The filters on the top can be used to handle graph 1
5. on mouse over on th bubble you can see the values.
6. On click you can the the Questions the user Interacted with

For local instalation:
1.npm install
2.npm start
3. open in url the link displayed in console

database:
1. go to  : https://www.mlab.com/login/
2. below are the credentials
username : adaptiveweb123
password : adaptive123
3. Below is the table and description 
user_login_activity : user action tracking database
user_login_log  	: User login log
users               : User details

Sources: Google Charts
www.codepen.com

body {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
}

[type="file"] {
    height: 0.1px; width: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    
    + label {
        background-color: #d3394c;
        color: #f1e5e6;
        cursor: pointer;
        display: inline-block;
        font-size: 1.25rem;
        font-weight: 700;
        overflow: hidden;
        padding: 0.625rem 1.25rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        
        svg {
            fill: currentColor;
            height: 1em; width: 1em;
            margin-top: -0.25em;
            margin-right: 0.25em;
            vertical-align: middle;
        }
        
        &:hover {
            background-color: #722040;
        }
    }
    
    &:focus + label {
        background-color: #722040;
        outline: 1px dotted #000;
    }
}











<input id="upload" type="file">

<label for="upload">
    
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
        <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/>
    </svg>
    
    <span> Choose a file&hellip;</span>
    
</label>







