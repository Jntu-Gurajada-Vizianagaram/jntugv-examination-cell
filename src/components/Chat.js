import React, { useState } from 'react';
import axios from 'axios';
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chat = () => {
    const genAI = new GoogleGenerativeAI('AIzaSyArYpFlqfgcoh_3_pRt4nLHJvZ4sXeIa2I'); // Make sure to replace with your actual API key

    const [search, setSearch] = useState('');
    const [conversations, setConversations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [answer, setAnswer] = useState('');
    async function aiRun() {
        if (!search.trim()) return;
        setLoading(true);
        const newConvo = { question: search, answer: '' };
        setConversations([...conversations, newConvo]);
        setSearch('');
        
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = newConvo.question;
        try{
            const response = await axios.post("http://localhost:3000/chatbot",{
            question: prompt,
        });
        console.log(response.data.message);
        setAnswer(response.data.message);
        }catch(error){
            console.log(error);
        };
        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = await response.text();
            setConversations(convs => convs.map(convo =>
                convo.question === newConvo.question ? { ...convo, answer: text } : convo
            ));
        } catch (error) {
            console.error('Error fetching AI response:', error);
            setConversations(convs => convs.map(convo =>
                convo.question === newConvo.question ? { ...convo, answer: "Error fetching response" } : convo
            ));
        } finally {
            setLoading(false);
        }
    }

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            aiRun();
        }
    }

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto', paddingBottom: '40px', paddingTop: '20px' }}>
            <div style={{ minHeight: '400px', maxHeight: '400px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px', marginBottom: '20px'}}>
                {conversations.length > 0 ? conversations.map((convo, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>You:</p>
                        <p style={{ margin: '0 0 10px 0', background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>{convo.question}</p>
                        <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>AI:</p>
                        <p style={{ margin: '0', background: '#e8e8e8', padding: '10px', borderRadius: '5px' }}>{answer || (loading ? 'Loading...' : '')}</p>
                    </div>
                )) : <p style={{ textAlign: 'center', color: '#999' }}>No conversations yet. Start by asking something!</p>}
            </div>
            <div style={{ display: 'flex', gap: '10px'}}>
                <input
                    value={search}
                    placeholder='Ask your queries'
                    onChange={handleChangeSearch}
                    onKeyPress={handleKeyPress}
                    style={{ flexGrow: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px'}}
                />
                <button onClick={aiRun} style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#12372A', color: 'white' }}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default Chat;
