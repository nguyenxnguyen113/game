const components = {};

components.registerScreen = `
<div class="register-container">
<div class="register-form">
    <div class="title">The Caro</div>
    <form id="form-register">
        <div class="name-wrapper">
            <div class="input-wrapper">
                <input type="text" name="firstName" placeholder="First name...">
                <div class="error" id="error-first-name"></div>
            </div>
            <div class="input-wrapper">
                <input type="text" name="lastName" placeholder="Last name...">
                <div class="error" id="error-last-name"></div>
            </div>
        </div>
        <div class="input-wrapper">
            <input type="text" name="email" placeholder="Email...">
            <div class="error" id="error-email-name"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" name="password" placeholder="Password...">
            <div class="error" id="error-password-name"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" name="confirmPassword" placeholder="confirm password...">
            <div class="error" id="error-confirm-password"></div>
        </div>
        <div class="submit-wrapper">
            <div class = "account-exist">Already have an account? <span class="cursor-pointer" id="redirect-to-login">Login</span></div>
            <button class="btn" type="submit">Register</button>

    </form>
</div>
</div>

`;

components.loginScreen = `
<div class = "login-container">
<div class = "login-form">
    <div class = "title">The Caro</div>
    <form id = "form-login">
      <div class = "name-wrapper">
        <div class = "input-wrapper">
            <input type="text" name="email" placeholder="Email...">
            <div class="error" id="error-email-name"></div>
        </div>
        <div class = "input-wrapper">
            <input type="password" name="password" placeholder="password...">
            <div class="error" id="error-password-name"></div>
        </div>
        <div class = "submit-wrapper">
            <div class = "account-exist">Don't have an account ? <span class = "cursor-pointer" id="redirect-to-register">Register</span></div>
            <button class = "btn" type="submit">Login</button>
        </div>
       </div>
    </form>
</div>
</div>
`;

components.menuScreen = `
<div class="menu-container"> 

    <div class="name-title">The Caro</div>
    
    <div class="room-list">
        
    </div>
    <div class="add-game">
        
        <button class="button" id="add-room" type="submit">CREATE NEW GAME</button>
            <button class="button" id="exit" type="submit">     lOGOUT     </button>
    </div>

</div>

`;

components.gameScreen = `
<div class="game-container">
<form id="game-form">
<div class="name-title">The Caro</div>
<div id = "divmain">
<table id="table">
</table>
</div>
<div id="divcontrol">
<div id="label1"><b>CURENT PLAYER:</b></div>
<div id="imgPlayer"></div>
<br/>
<progress id="pgrTime" max="100" value="100"></progress>
<time></time>
<br/>
<input type="button" class="button" value="PLAYER VS PLAYER" onClick="PvsP()"/>
<br/>
<input type="submit" class="button" value="EXIT&DELETEROOM" onClick="deleteRoom()"/>
<br/>
<input type="submit" class="button" value="            EXIT            " />
</div>
</form>  
</div>
`;
