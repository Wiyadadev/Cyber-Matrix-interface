*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  overflow:hidden;
  background:black;
  font-family:Arial;
}

canvas{
  position:fixed;
  top:0;
  left:0;
  z-index:-1;
}

.content{
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:#00ff88;
  text-align:center;
}

h1{
  font-size:70px;
  text-shadow:0 0 20px #00ff88;
}

p{
  margin-top:10px;
  color:white;
  font-size:20px;
}

button{
  margin-top:30px;
  padding:15px 40px;
  border:none;
  background:#00ff88;
  color:black;
  font-size:18px;
  border-radius:10px;
  cursor:pointer;
  transition:0.3s;
}

button:hover{
  transform:scale(1.1);
  box-shadow:0 0 20px #00ff88;
}
