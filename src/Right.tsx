import React, { useState } from 'react';
import './right.css';
import * as _ from 'lodash';


interface Userdata {
    name: string,
    password: string,
    checked: boolean,
    gender: Gender,
    Usertype: string
    isopen: boolean
}

enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other',
}


function Right() {
    const [user, setUser] = useState<Userdata>({ name: '', password: '', checked: false, gender: Gender.Male, Usertype: '', isopen: true });

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!user.checked) {
            alert("please check the checkbox")
        } else if (!user.Usertype) {
            alert("pleace select option")
        }
        else {
            const records = JSON.parse(localStorage.getItem('userdb') || '{}')
            if (user) {

                const username = _.find(records, {
                    name: user.name,
                    password: user.password
                });
                if (username) {
                    alert("success")

                }
                else {
                    alert("error")
                }
            }
            console.log(user)
        }
    }



    const handleChange = (e: any) => {
        const value = e.target.value
        const name = e.target.name
        // const ch=e.target.value
        // console.log(value)

        if (name === 'checked') {
            setUser({ ...user, [name]: e.target.checked, isopen: true })
            return
        }
        setUser({ ...user, [name]: value })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <section className='login-form'>
                    <section className='page-headding'>
                        <section className='Log-in'>
                            <h2>LOGIN</h2>
                        </section>

                    </section>

                    <section className='Main-form'>
                        <section className='frame'>
                            <section className='SVGImage'>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M22.0963 15.2349C21.3008 14.536 20.3362 13.9321 19.229 13.4401C18.7557 13.2299 18.2018 13.4431 17.9916 13.9162C17.7814 14.3893 17.9945 14.9432 18.4677 15.1536C19.4013 15.5685 20.2059 16.0697 20.8586 16.6434C21.6634 17.3505 22.125 18.3745 22.125 19.4531V21.1875C22.125 21.7044 21.7044 22.125 21.1875 22.125H2.8125C2.29559 22.125 1.875 21.7044 1.875 21.1875V19.4531C1.875 18.3745 2.33661 17.3505 3.14136 16.6434C4.08856 15.811 6.84833 13.875 12 13.875C15.8253 13.875 18.9375 10.7628 18.9375 6.9375C18.9375 3.11224 15.8253 0 12 0C8.17474 0 5.0625 3.11224 5.0625 6.9375C5.0625 9.17377 6.12634 11.166 7.77429 12.4354C4.75891 13.0983 2.88318 14.3741 1.90375 15.2349C0.69397 16.2979 0 17.8352 0 19.4531V21.1875C0 22.7384 1.2616 24 2.8125 24H21.1875C22.7384 24 24 22.7384 24 21.1875V19.4531C24 17.8352 23.306 16.2979 22.0963 15.2349V15.2349ZM6.9375 6.9375C6.9375 4.14606 9.20856 1.875 12 1.875C14.7914 1.875 17.0625 4.14606 17.0625 6.9375C17.0625 9.72894 14.7914 12 12 12C9.20856 12 6.9375 9.72894 6.9375 6.9375V6.9375Z" fill="#A5ABB5" />
                                </svg>
                            </section>

                            <section className='Uname'>
                                <input type="email" className='username' placeholder='Username' onChange={handleChange} name="name" /></section>
                        </section>

                        <section className='frame2'>
                            <section className='SVGImage2'>
                                <section >
                                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.5625 16.9688C21.0803 16.9688 21.5 16.549 21.5 16.0312V12.5625C21.5 10.4948 19.8177 8.8125 17.75 8.8125H16.6233V5.50622C16.6233 2.47008 14.0999 0 10.9983 0C7.89664 0 5.37327 2.47008 5.37327 5.50622V8.8125H4.25C2.18225 8.8125 0.5 10.4948 0.5 12.5625V20.25C0.5 22.3177 2.18225 24 4.25 24H17.75C19.8177 24 21.5 22.3177 21.5 20.25C21.5 19.7322 21.0803 19.3125 20.5625 19.3125C20.0447 19.3125 19.625 19.7322 19.625 20.25C19.625 21.2839 18.7839 22.125 17.75 22.125H4.25C3.21613 22.125 2.375 21.2839 2.375 20.25V12.5625C2.375 11.5286 3.21613 10.6875 4.25 10.6875H17.75C18.7839 10.6875 19.625 11.5286 19.625 12.5625V16.0312C19.625 16.549 20.0447 16.9688 20.5625 16.9688ZM14.7483 8.8125H7.24827V5.50622C7.24827 3.50395 8.93052 1.875 10.9983 1.875C13.066 1.875 14.7483 3.50395 14.7483 5.50622V8.8125Z" fill="#A5ABB5" />
                                    </svg>
                                </section>

                                <section className='group'>
                                    <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.78125 2.15625C2.29902 2.15625 2.71875 1.73652 2.71875 1.21875C2.71875 0.700983 2.29902 0.28125 1.78125 0.28125C1.26348 0.28125 0.84375 0.700983 0.84375 1.21875C0.84375 1.73652 1.26348 2.15625 1.78125 2.15625Z" fill="#A5ABB5" />
                                    </svg>
                                    <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.78125 2.15625C2.29902 2.15625 2.71875 1.73652 2.71875 1.21875C2.71875 0.700983 2.29902 0.28125 1.78125 0.28125C1.26348 0.28125 0.84375 0.700983 0.84375 1.21875C0.84375 1.73652 1.26348 2.15625 1.78125 2.15625Z" fill="#A5ABB5" />
                                    </svg>
                                    <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.78125 2.15625C2.29902 2.15625 2.71875 1.73652 2.71875 1.21875C2.71875 0.700983 2.29902 0.28125 1.78125 0.28125C1.26348 0.28125 0.84375 0.700983 0.84375 1.21875C0.84375 1.73652 1.26348 2.15625 1.78125 2.15625Z" fill="#A5ABB5" />
                                    </svg>
                                    <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.78125 2.15625C2.29902 2.15625 2.71875 1.73652 2.71875 1.21875C2.71875 0.700983 2.29902 0.28125 1.78125 0.28125C1.26348 0.28125 0.84375 0.700983 0.84375 1.21875C0.84375 1.73652 1.26348 2.15625 1.78125 2.15625Z" fill="#A5ABB5" />
                                    </svg>
                                </section>

                            </section>
                            <section className='PWD'>

                                <input type="password" placeholder='Password' className='username' onChange={handleChange} name="password" pattern="(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" />

                            </section>

                        </section>

                        <section className='radiobtn'>
                            <section><label>Gender :</label></section>

                            <section><input name="gender" type="radio" value={Gender.Male} onChange={handleChange} checked={Gender.Male === user.gender} />Male</section>
                            <section><input name="gender" type="radio" value={Gender.Female} onChange={handleChange} checked={Gender.Female === user.gender} />Female</section>
                            <section><input name="gender" type="radio" value={Gender.Other} onChange={handleChange} checked={Gender.Other === user.gender} />Other</section>
                        </section>

                    </section>
                    <section className='checkbtn'>

                        <input type="checkbox" name="checked" onClick={handleChange} /><label>Agree terms and conditions</label>

                    </section>
                    <section className='selectbtn'>
                        <label>Choose role:</label>

                        <select onChange={handleChange} name="Usertype" >
                            <option>Select</option>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>

                        </select>
                    </section>
                    <section className='frame3'>

                        <button type="submit" value="register">LOGIN</button>
                    </section>
                </section>
                {/* <Dialog show={user.isopen} title=""></Dialog> */}

                <dialog id="simple">
                    <p>I'm a Simple Dialog.</p>
                    <form method="dialog">
                        <button>Close</button>
                    </form>
                </dialog>
            </form>

        </>
    );
}

export default Right;
