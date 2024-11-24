import React, {useState} from "react";
import Link from "next/link";
import styles from '@/styles/signup.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "next/navigation";
import { Alert } from "@mui/material";

function SignUpComponent() {
	const [isShow, setIsShow] = useState(false);
	const[email, setEmail] = useState('')
	const[password, setPassword] = useState('')
	const[phone, setPhone] = useState('')
	const[password1, setPassword1] = useState('')
	
	const router = useRouter(); 


	function clickHandler(e) {
		e.preventDefault();
		localStorage.setItem(email, password)
		
		if(password !== password1) {
			alert('insert a correct password') 
		} 
		
		
		// Show the message
		setIsShow(true);

		// Redirect after a delay
		setTimeout(() => {
			 router.push("/");  // Use router.push for client-side navigation
		}, 5000);
  }

	function emailHandler(e) {
		setEmail(e.target.value)
		console.log(email);
		
	}
	function passwordHandler1(e) {
		setPassword1(e.target.value)
		console.log(password1);
		
	}


	function phoneHandler(e) {
		setPhone(e.target.value)
		console.log(phone);
		
	}


	function passwordHandler(e) {
		setPassword(e.target.value)
		console.log(password);
		
	}


    return (
        <div className={styles.container}>
            {/* Back to Home Icon */}
            <Link href="/">
                <FontAwesomeIcon icon={faArrowLeft} className={styles.backButton} />
            </Link>

            <div className={styles.form}>
                <h1 style={{fontSize : "1.6rem", fontWeight : "700", fontFamily : "Outfit, sans-serif", marginBottom : "10px"}}>
						Sign Up To Our Page
					 </h1>
                <form>
                    {/* <label htmlFor="email">Email</label>
                    <br /> */}
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Your Email Address" 
                        className={styles.inputField} 
								value={email}
								onChange = {emailHandler}
                    />
                    <br />
                    {/* <label htmlFor="phone">Phone Number</label>
                    <br /> */}
                    <input 
                        type="text" 
                        id="phone" 
                        placeholder="Your Phone Number" 
                        className={styles.inputField} 
								value={phone}
								onChange = {phoneHandler}
                    />
                    <br />
                    {/* <label htmlFor="password">Password</label>
                    <br /> */}
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Your Password" 
                        className={styles.inputField} 
								value={password}
								onChange = {passwordHandler}
                    />
                    <br />
                    {/* <label htmlFor="repeatPassword">Repeat Your Password</label>
                    <br /> */}
                    <input 
                        type="password" 
                        id="repeatPassword" 
                        placeholder="Repeat Your Password" 
                        className={styles.inputField} 
								value={password1}
								onChange={passwordHandler1}
								// color="black"
                    />
                    <br />
                    <button type="submit" className={styles.submitButton} onClick={clickHandler}>Submit</button>
                    <Link href='/signin'>
                        <h2 className={styles.signUpLink} style={{ fontSize : "large", fontWeight : "bold"}}>Already Have Account?</h2>
                    </Link>
                </form>
            </div>
				{isShow && <div className={styles.notification}>
					<Alert severity="success" variant="outlined" icon = {false} sx={{color : "white", border : "none"}}>
						<b>welcome to our site</b><br />
						<b>i hope to have good time with us</b>
						<br />
						{/* <br /> */}
						you are backing to home page...
					</Alert>
            </div>}
        </div>
    );
}

export default SignUpComponent;




