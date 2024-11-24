import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';  // Import useRouter for client-side navigation
import styles from '@/styles/signin.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Alert } from "@mui/material";

function SignInComponent() {
    const [isShow, setIsShow] = useState(false);
	 const[email, setEmail] = useState('')
	 const[password, setPassword] = useState('')
	 const[phone, setPhone] = useState('')
	 
    const router = useRouter();  // Initialize useRouter

    function clickHandler(e) {
        e.preventDefault();
		  localStorage.setItem(email, password)
		  
		  
        
        // Show the message
        setIsShow(true);

        // Redirect after a delay
        setTimeout(() => {
            router.push('/');  // Use router.push for client-side navigation
        }, 5000);
    }

	 function emailHandler(e) {
		setEmail(e.target.value)
		console.log(email);
		
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
                <h1 style={{fontSize : "1.7rem", fontWeight : "700", fontFamily : "Outfit, sans-serif", marginBottom : "10px"}}>Login to Our Site</h1>
                <form>
                    <input 
                        type="email" 
                        placeholder="Your Email Address" 
                        className={styles.inputField} 
								value={email}
								onChange={emailHandler}
                    />
                    <br />
                    <input 
                        type="text" 
                        placeholder="Your Phone Number" 
                        className={styles.inputField} 
								value={phone}
								onChange={phoneHandler}
                    />
                    <br />
                    <input 
                        type="password" 
                        placeholder="Your Password" 
                        className={styles.inputField} 
								value={password}
								onChange={passwordHandler}
								
                    />
                    <br />
                    <div className={styles.forgotPassword} 
						  style={{textDecoration: 'none', fontWeight : "large", fontWeight : "700"}}>Forgot password?</div>
                    <button type="submit" className={styles.submitButton} onClick={clickHandler}>Submit</button>
                    <Link href='/signup'>
                        <h2 className={styles.signUpLink} 
								style={{textDecoration: 'none' , fontSize : "large", fontWeight : "bold"}}>Do Not Have Any Account?</h2>
                    </Link>
                </form>
            </div>
            {isShow && <div className={styles.notification}>
					<Alert severity="success" variant="outlined" icon = {false} sx={{color : "white", border : "none"}} >
						<b>welcome back</b>
						<br />
						{/* <br /> */}
						you are backing to home page...
					</Alert>
            </div>}
        </div>
    );
}

export default SignInComponent;
