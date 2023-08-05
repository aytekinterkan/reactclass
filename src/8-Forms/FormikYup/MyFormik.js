import React from 'react'
import {useFormik} from "formik"

const MyFormik = () => {

    const{handleSubmit,handleChange,errors,touched,handleBlur}=
    useFormik({
        initialValues:{
            name:"",
            email:"",
            gender:"",
            hobies:[],
            country:"",
            confirmPassword:"",
        },
        onSubmit:(values,bag)=>{
            console.log(values)
            bag.resetForm();
        }
    })
  return (
    <form onSubmit={handleSubmit}>
        <input
        type='text'
        name='name'
        placeholder='name'
        onChange={handleChange}
        onBlur={handleBlur}
        />
        <br/>
        <label>Male</label>
        <input type="radio" name='gender' value="male" onChange={handleChange}/>
        <label>Female</label>
        <input type="radio" name='gender' value="female" onChange={handleChange}/>
        <br/>
        <label>Football</label>
        <input type="checkbox" name='hobies' value="Football" onChange={handleChange}/>
        <label>Cinema</label>
        <input type="checkbox" name='hobies' value="Cinema" onChange={handleChange}/>
        <label>Photography</label>
        <input type="checkbox" name='hobies' value="Photograpy" onChange={handleChange}/>
        <br/>
        <select name='country' onChange={handleChange}>
            <option value="">-</option>
            <option value="tr">Turkey</option>
            <option value="en">England</option>
            <option value="USA">USA</option>

        </select>
        <br/>
        <label>
            Confirm Password
        </label>
        <br/>
        <input name='confirmPassword' onChange={handleChange} onBlur={handleBlur}/>
        <br/>
        <br/>
        <button type="submit">Kayıt ol</button>


    </form>
  )
}

export default MyFormik