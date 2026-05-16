import { useState } from "react";


export default function LoginScreen({navigation}:any){
    const [email, setEmail] = useState('');
    const [password, setPassord] = useState('');

    const handleLogin = () => {
        if (email && password.length >= 4) {
        navigation.navigate('MainTabs', { email });
    }
    };

    return("");
}
