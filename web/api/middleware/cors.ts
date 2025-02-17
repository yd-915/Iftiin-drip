import Cors from 'cors';

export const cors = Cors({
    methods: ['POST', 'GET', 'DELETE'],
    origin: (origin, callback) => {
        console.log(origin);
        if (
            !origin ||
            origin.endsWith('deadrop.io') ||
            origin.includes('vscode-webview:')
        )
            callback(null, true);
        else if (
            process.env.NODE_ENV !== 'production' &&
            origin.startsWith('http://localhost:')
        )
            callback(null, true);
        else callback(new Error('Invalid origin'));
    },
});
