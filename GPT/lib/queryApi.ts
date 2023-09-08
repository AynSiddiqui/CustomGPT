import openai from "./chatgpt";

const query=async(input:string,id:string,model:string)=>{
    const res=await openai.completions.create({
        model,
        prompt:input,
        temperature:0.9,
        max_tokens:1000,
        presence_penalty:0,
        frequency_penalty:0,
    }).then(res=>res.choices[0].text).catch(
        (err)=>err.message
    );
    return res;
}
export default query;