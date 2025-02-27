import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
    try {

        const { key, writtenInput, otherGradeInput, otherSubjectInput } = await req.json();
   
        //messages based on pair selections
        const promptMessagePairs = {
            "Elementary-Behavior": `You are a special education expert. Write an individualized education 
            plan (IEP) goal for a special education teacher to improve behavior for an elementary student. 
            Here is addtional information from the teacher on how the student can grow: ` + writtenInput + ". ",
            "Elementary-Math": `You are a special education expert. Write an individualized education 
            plan (IEP) goal for a special education teacher to improve mathematics skills for an elementary student. 
            Here is addtional information from the teacher on how the student can grow: ` + writtenInput + ". ",
            "Elementary-Reading": `You are a special education expert. Write an individualized education 
            plan (IEP) goal for a special education teacher to improve reading skills for an elementary student. 
            Here is addtional information from the teacher on how the student can grow: ` + writtenInput + ". ",
            "Middle School-Behavior": `You are a special education expert. Write an individualized education 
            plan (IEP) goal for a special education teacher to improve behavior for a middle school student. 
            Here is addtional information from the teacher on how the student can grow: ` + writtenInput + ". ",
            "Middle School-Math": `You are a special education expert. Write an individualized education 
            plan (IEP) goal for a special education teacher to improve math skills for a middle school student. 
            Here is addtional information from the teacher on how the student can grow: ` + writtenInput + ". ",
            "Middle School-Reading": `You are a special education expert. Write an individualized education 
            plan (IEP) goal for a special education teacher to improve reading skills for a middle school student. 
            Here is addtional information from the teacher on how the student can grow: ` + writtenInput + ". ",
            "High School-Behavior": `You are a special education expert. Write an individualized education 
            plan (IEP) goal for a special education teacher to improve behavior for a high school student. 
            Here is addtional information from the teacher on how the student can grow: ` + writtenInput + ". ",
            "High School-Math": `You are a special education expert. Write an individualized education 
            plan (IEP) goal for a special education teacher to improve math skills for a high school student. 
            Here is addtional information from the teacher on how the student can grow: ` + writtenInput + ". ",
            "High School-Reading": `You are a special education expert. Write an individualized education 
            plan (IEP) goal for a special education teacher to improve reading skills for a high school student. 
            Here is addtional information from the teacher on how the student can grow: ` + writtenInput + ". ",
            "Other-Behavior": `You are a special education expert. Write an individualized education 
            plan (IEP) goal for a special education teacher to improve behavior for a ` + otherGradeInput + ` student. 
            Here is addtional information from the teacher on how the student can grow: ` + writtenInput + ". ",
            "Other-Math": `You are a special education expert. Write an individualized education 
            plan (IEP) goal for a special education teacher to improve math skills for a ` + otherGradeInput + ` student. 
            Here is addtional information from the teacher on how the student can grow: ` + writtenInput + ". ",
            "Other-Reading": `You are a special education expert. Write an individualized education 
            plan (IEP) goal for a special education teacher to improve reading for a ` + otherGradeInput + ` student. 
            Here is addtional information from the teacher on how the student can grow: ` + writtenInput + ". ",
            "Elementary-Other": `You are a special education expert. Write an individualized education 
            plan (IEP) goal for a special education teacher to improve ` + otherSubjectInput + ` for an elementary student. 
            Here is addtional information from the teacher on how the student can grow: ` + writtenInput + ". ",
            "Middle School-Other": `You are a special education expert. Write an individualized education 
            plan (IEP) goal for a special education teacher to improve ` + otherSubjectInput + ` for a middle school student. 
            Here is addtional information from the teacher on how the student can grow: ` + writtenInput + ". ",
            "High School-Other": `You are a special education expert. Write an individualized education 
            plan (IEP) goal for a special education teacher to improve ` + otherSubjectInput + ` for a high school student. 
            Here is addtional information from the teacher on how the student can grow: ` + writtenInput + ". ",
            "Other-Other": `You are a special education expert. Write an individualized education 
            plan (IEP) goal for a special education teacher to improve ` + otherSubjectInput + ` for a ` + otherGradeInput + ` student. 
            Here is addtional information from the teacher on how the student can grow: ` + writtenInput + ". ",
        };

        //find the right message 
        const promptPairData = promptMessagePairs[key];

        const promptMessageToSend = promptPairData + `Explain why you chose this goal and always include 
            potential alternative goals. Format the response as a JSON object. Do not include any other information in the 
            response. Example: ` +
            `{
            "IEP_goal": "By the end of the school year, the student will improve their 
            reading comprehension skills to accurately summarize a grade-level passage in writing, 
            with at least 80% accuracy as measured by teacher-generated assessments.", 
            "reason": "I chose this goal because it focuses on a specific skill area that the student 
            needs to improve on, which is reading comprehension. By targeting this area, we can track the student's 
            progress more effectively throughout the year.", 
            "potential_alternative_goals": ["By the end of the school year, the student will increase 
            their vocabulary knowledge by correctly defining and using at least 10 new grade-level 
            words in writing assignments with at least 80% accuracy.", "By the end of the school year, 
            the student will improve their fluency by being able to read a grade-level passage aloud with correct 
            pronunciation and expression at a rate of 100 words per minute."]
            };`

        const url = "https://api.openai.com/v1/chat/completions";
        const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.TEACHTO_OPENAI_API_KEY}`
        };
        const data = {
        model: "gpt-4o-mini-2024-07-18",
        messages: [{ "role": "user", "content": promptMessageToSend }],
        max_tokens: 700
        };

        console.log(promptMessageToSend);

        //make the request and get response
        const response = await axios.post(url, data, { headers });
        const chatResponseData = response.data.choices[0].message.content;
        console.log(chatResponseData);

        console.log("Backend hit successfully!");
        return NextResponse.json({ chatResponseData });

    } catch (error) {
        console.log("API Error: " + error);
        return NextResponse.json({ error: "Failed to fetch response. Sorry!"})
    }
}