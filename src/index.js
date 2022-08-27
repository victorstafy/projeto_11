import express from 'express';
import cors from 'cors';

// express.json()
const server=express();
server.use(express.json());
server.use(cors());

const tweets_list=[];
let _user_avatar='';


server.post('/sign-up',(req,res)=>{
    const user_profile=req.body;

    if(!user_profile.avatar || !user_profile.username ){
        return res.status(400).send("Todos os campos são obrigatórios!")
    }

    _user_avatar=(user_profile.avatar).slice();
    res.status(201).send('OK');
});

server.post('/tweets',(req,res)=>{
    const tweet=req.body;

    if(!tweet.tweet || !tweet.username ){
        return res.status(400).send("Todos os campos são obrigatórios!")
    }

    tweet.avatar=_user_avatar;
    tweets_list.push(tweet);
    res.status(201).send('OK');
});

server.get('/tweets',(req,res)=>{
    res.send(tweets_list.slice(-10));
})

server.listen(5000,function(){console.log('ouvindo')});