import bcryptjs from "bcryptjs";
export const hashedPassword = async(password)=>{
    return await bcryptjs.hash(password,12);
};

export const comparePassword = async(password,hashedPassword)=>{
    return await bcryptjs.compare(password,hashedPassword);
}