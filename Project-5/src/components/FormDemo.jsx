// from validation and submission
import { useForm } from "react-hook-form";
function FormDemo(){


        let{register,handleSubmit,formState:{errors}}=useForm()


        function onFormSubmit(data){
            console.log(data);
        }
        return(
        <div className="container">
            <h1>FormDemo</h1>
            <form onSubmit={handleSubmit(onFormSubmit)}>

                {/* name */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" {...register("name",{required:true,minLength:3,maxLength:10})} className="form-control" id="name" />
                    {/* validation error messages */}
                    {errors?.name?.type==="required" && <p className="text-danger">Name is required</p>}
                    {errors?.name?.type==="minLength" && <p className="text-danger">Name is too short</p>}
                    {errors?.name?.type==="maxLength" && <p className="text-danger">Name is too long</p>}
                </div>

                {/* email */}

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" {...register("email")} className="form-control" id="email" />
                </div>
                
                {/* course selection */}
                <div className="mb-3">
                    <label htmlFor="course" className="form-label">Course</label>
                    <select {...register("course")} className="form-select" id="course">
                        <option value="">Select Course</option>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>

                {/* skills */}
                <div className="mb-3">
                    <div className="form-check">
                        <input type="checkbox" {...register("css")} className="form-check-input" id="css" />
                        <label htmlFor="css" className="form-check-label">CSS</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" {...register("javascript")} className="form-check-input" id="javascript" />
                        <label htmlFor="javascript" className="form-check-label">JavaScript</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" {...register("react")} className="form-check-input" id="react" />
                        <label htmlFor="react" className="form-check-label">React</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default FormDemo

// button of type submit is used to submit the form onsubmit event of form
// button of type button is used to trigger the onclick event of button

// apply validation rules
// 1.required
// 2.min
// 3.max
// 4.minLength
// 5.maxLength
// 6.pattern
