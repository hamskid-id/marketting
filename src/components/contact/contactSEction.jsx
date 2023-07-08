import { Btn } from "../../element/btn";
import { Text } from "../../element/text"
import { InputField } from "../customFormField";
import { useForm } from "react-hook-form";
import bg from  "../../assets/RectangleContact 1.svg";
import { RevealAnimation } from "../reveal";

export const Contact =()=>{
    
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        name,
        email,
        tel,
        message
    })=>{
       console.log(
            name,
            email,
            tel,
            message
            
        )
    }

    return(
        <div className="d-flex wrap">
            <div 
                className="wt-50 contact-bg p-5"
                style={{backgroundImage: `url("${bg}")`}}
            >
                <RevealAnimation>
                    <Text style="fw-bold text-white m-auto ln-62 fw-bold ln-64 h-3rem" value="We'd love to hear from you"/>
                </RevealAnimation>
            </div>
            <div className="wt-50 p-5">
                <RevealAnimation>
                    <Text
                        style="fs-5 text-start fw-bold my-3"
                        value="Contact Us"
                    />
                </RevealAnimation>
                <form  onSubmit={handleSubmit(SubmitHandler)}>
                    {
                        [
                            {
                                label:"Your name",
                                type:"text",
                                placeholder:"John Doe",
                                error:errors.name,
                                name:"name",
                            },
                            {
                                label:"Email address",
                                type:"email",
                                placeholder:"Johndoe@gmail.com",
                                error:errors.email,
                                name:"email",
                            },
                            {
                                label:"Phone number",
                                type:"tel",
                                placeholder:"09087654444",
                                error:errors.tel,
                                name:"tel",
                            },
                            {
                                label:"Message",
                                type:"textArea",
                                placeholder:"type here",
                                error:errors.message,
                                name:"message",
                            }
                            
                        ].map((option,index)=>{
                            const{
                                label,
                                type,
                                placeholder,
                                name,
                                error
                            }=option;
                            return(
                                <RevealAnimation>       
                                    <InputField
                                        placeHolder={placeholder}
                                        name={name}
                                        type={type}
                                        errors={error}
                                        register={register}
                                        labelTitle={label}
                                        labelStyle="c-grey h7"
                                        style="btn border rounded p-2 w-100 text-start mb-2"
                                    />
                                </RevealAnimation>
                                
                            )
                        })
                    }
                    <RevealAnimation>
                        <Btn
                            style="btn w-100 btn-md my-2 bg-purple text-white"
                            value="Send Message"
                        />
                    </RevealAnimation>
                </form>
            </div>
        </div>
    )
}