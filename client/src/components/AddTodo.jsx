import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { addTodo } from "../redux/apiCall.js";
import './addtodo.css';

export default function AddTodo() {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    // const { user } = useContext(Context)
    const schema = yup.object().shape({
        description: yup.string().required("description is required"),
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        addTodo(dispatch, data)
    };
    return (
        <div className="formWrapper">
            <form onSubmit={handleSubmit(onSubmit)} className="Form" >
                <textarea
                    {...register("description")}
                    name="description"
                    id="description"
                ></textarea>
                <p>{errors.description?.message}</p>
                <input className="submitBtn" type="submit" value="save" />
            </form>
        </div>
    )
}
