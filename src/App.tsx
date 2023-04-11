import { useState } from 'react';
import styles from '../src/App.module.scss'



interface IUser{
email:string;
password:string;
}



function App() {
const [email , setEmail] = useState('')
const [password,setPassword] = useState('')
const [user, setUser] = useState<IUser>()


const loginUser =  ()=> {
if(email && password ){
setUser({
email:email,
password:password})
alert(`${email} успешно авторизирован `)
console.log(user)}
else{
  alert('Error')
}
}
const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
}
  return (
    <div className={styles.root}>
      <form onSubmit={handleFormSubmit} className={styles.content}>
        <h1 className={styles.title}>Kind Earthlings</h1>
        <label>
          email
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            autoComplete="username"
          />
        </label>
        <label>
          password
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
            autoComplete="current-password"
          />
        </label>
        <button onClick={loginUser}>&lt;&frasl;Login&gt;</button>
      </form>
    </div>
  )
}

export default App;
