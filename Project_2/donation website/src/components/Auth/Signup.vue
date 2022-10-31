<template>
    <div class="container">
        <div class="card">
            <div class="card_title">
                <h1>Create Account</h1>
                <span>Already have an account? <a href="login">Sign In</a></span>
            </div>
            <div class="form">
                <form action="/register" method="post">
                    <input type="text" name="username" id="username" placeholder="UserName" />
                    <input type="email" name="email" placeholder="Email" id="email" />
                    <input type="password" name="password" placeholder="Password" id="password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div class="card_terms">
                <input type="checkbox" name="" id="terms"> <span>I have read and agree to the <a href="">Terms of
                        Service</a></span>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}

.container {
    height: 100vh;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;}

.card {
    border-radius: 10px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
    width: 400px;
    height: 400px;
    background-color: #ffffff;
    padding: 10px 30px;
}

.card_title {
    text-align: center;
    padding: 10px;
}

.card_title h1 {
    font-size: 26px;
    font-weight: bold;
}

.form input {
    margin: 10px 0;
    width: 100%;
    background-color:  #f2f2f2;
    border: none;
    outline: none;
    padding: 12px 20px;
    border-radius: 4px;
}

.form button {
    background: rgb(252, 113, 113);
    color: #ffffff;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    border: none;
    padding: 8px 15px;
    width: 100%;
}

.card_terms {
    display: flex;
    align-items: center;
    padding: 10px;
}

.card_terms input[type="checkbox"] {
    background-color: #e2e2e2;
}

.card_terms span {
    margin: 5px;
    font-size: 13px;
}

.card a {
    color: rgb(252, 113, 113);
    text-decoration: none;
}
</style>