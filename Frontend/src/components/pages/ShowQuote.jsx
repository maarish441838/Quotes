import React from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

function ShowQuote() {
    let [quote, setQuote] = useState({ author: "", text: "" })
    
    const params = useParams();

    async function fetchQuotes() {
        let resp = await axios.get(`http:localhost:8080/quotes/${params.id}`);

        let { text, author } = resp.data;
        setQuote({ text, author });
    }
    useEffect(() => {
        fetchQuotes();
    }, [])
    
    return (
        <div>
            <h1>{AllQuotes.author}</h1>
            <h1>{ AllQuotes.text}</h1>
        </div>
    )
}
export default ShowQuote