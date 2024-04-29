
class AuthException extends Error {
  constructor(code, message) {
    const fullMessage = message ? `${code}: ${message}` : code;
        super(fullMessage);
        this.code = code;
        this.message = fullMessage;
  }
  
  toString() {
    return this.message;
  }
}

const checkAuth = document.querySelector('.check-auth');
let isAuth = (auth)  => auth ?? false;
checkAuth.addEventListener('click', () => {
            try{
                if(!isAuth()) {
                  throw new AuthException("FORBIDDEN" , "You don`t have access to this page.");
                } else {
                    window.open("/success.html.");
                }
              
            } catch (e) {
              dialogBoxId.querySelector('.message').textContent = e;
              showDialog(e.toString())
            }
})
        
let dialogBoxId=document.getElementById("dialogBox");
function showDialog(e){
  dialogBoxId.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
    }
  });
  
  dialogBoxId.showModal();
}

function closeDialog(){
  dialogBoxId.close(); 
}
