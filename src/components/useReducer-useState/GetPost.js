import { useEffect, useState } from 'react';

const initialState = {
    loading: true,
    error: '',
    post: {}
}

export default function GetPost() {

    const [state, setState] = useState(initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => {
                setState({
                    loading: false,
                    error: '',
                    post: data
                });
            })
            .catch(() => {
                setState({
                    loading: false,
                    error: 'There was a problem!',
                    post: {}
                });
            });
    }, []);

    return (
        <div>
            {state.loading ? 'Loading....' : state.post.title}
            {state.error || null}
        </div>
    );
}