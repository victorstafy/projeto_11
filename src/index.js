import express from 'express';
// import cors from 'cors';

const server=express();
server.use(express.json());

const tweets_list=[];
let _user_avatar='';


server.post('/sign-up',(req,res)=>{
    const user_profile=req.body;
    _user_avatar=user_profile.avatar;
    res.send('OK');
    console.log('post_sign-up');
});

server.post('/tweets',(req,res)=>{
    const tweet=req.body;
    console.log(_user_avatar)
    tweet.avatar=_user_avatar;
    tweets_list.push(tweet);
    res.send('OK');
    console.log('post_tweets');
});

server.get('/tweets',(req,res)=>{
    res.send(tweets_list.slice(-10));
    console.log('get_tweets');
})

server.listen(5000,function(){console.log('ouvindo')});