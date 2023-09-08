//nexjs api route for asking a question
import query from "../../lib/queryApi";
import { NextApiRequest, NextApiResponse } from "next";
import admin from 'firebase-admin'
import { adminDb } from '../../firebaseAdmin';
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";

type Data = {
    answer: string;
    };
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
    ) {
        const {id,prompt,model,session} = req.body;
        if(!prompt){
            res.status(400).json({answer:"Please provide a prompt"});
            return;
        }
        if(!id){
            res.status(400).json({answer:"Please provide a valid chat id"});
            return;
        }
        
        // GPT query
        const response=await query(prompt,id,model);
        const  message:Message={
            text:response||'Unable to generate response',
            createdAt:admin.firestore.Timestamp.now(),
            user:{
                _id:'ChatGPT',
                name:'ChatGPT',
                avatar:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png',
            }
        }
        const a=await adminDb  
        .collection('users').doc(session?.user?.email)
        .collection('chats').doc(id)
        .collection('messages').add(message);
        res.status(200).json({ answer: message.text })
}
